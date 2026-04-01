const fs = require("fs");
const path = require("path");
const services = require("../models/services.model.js");

const removeFileIfExists = (filePath) => {
  if (!filePath) {
    return;
  }

  const normalizedPath = filePath.replace(/^\//, "").replace(/\//g, path.sep);
  const absolutePath = path.join(__dirname, "..", normalizedPath);

  if (fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
  }
};

const removeUploadedFiles = (files = {}) => {
  Object.values(files)
    .flat()
    .forEach((file) => {
      if (file?.path && fs.existsSync(file.path)) {
        fs.unlinkSync(file.path);
      }
    });
};

const parseJsonField = (value, fallback = undefined) => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (typeof value !== "string") {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

const normalizeStringArray = (value) => {
  const parsedValue = parseJsonField(value, value);

  if (Array.isArray(parsedValue)) {
    return parsedValue.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof parsedValue === "string") {
    return parsedValue
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
};

const buildPublicFilePath = (file) => `/uploads/services/${file.filename}`;

const slugify = (value) =>
  String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const generateUniqueSlug = async (serviceName, currentId) => {
  const baseSlug = slugify(serviceName) || `service-${Date.now()}`;
  let slug = baseSlug;
  let counter = 1;

  while (
    await services.exists({
      slug,
      ...(currentId ? { _id: { $ne: currentId } } : {}),
    })
  ) {
    slug = `${baseSlug}-${counter}`;
    counter += 1;
  }

  return slug;
};

const generateUniqueTourId = async () => {
  let tourID = `SRV-${Date.now()}`;

  while (await services.exists({ tourID })) {
    tourID = `SRV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  return tourID;
};

const prepareServicePayload = async (req, currentService) => {
  const payload = { ...req.body };
  const uploadedThumbnail = req.files?.thumbnail?.[0];
  const uploadedImages = req.files?.images || [];
  const existingImages = normalizeStringArray(
    payload.existingImages !== undefined ? payload.existingImages : payload.images
  );
  const parsedSchedule = parseJsonField(payload.schedule, payload.schedule);

  delete payload.existingImages;

  if (parsedSchedule !== undefined) {
    payload.schedule = Array.isArray(parsedSchedule) ? parsedSchedule : [];
  }

  if (payload.prices !== undefined) {
    payload.prices = Number(payload.prices);
  }

  if (payload.rating !== undefined) {
    payload.rating = Number(payload.rating);
  }

  if (payload.total_review !== undefined) {
    payload.total_review = Number(payload.total_review);
  }

  if (!payload.slug && payload.servicesName) {
    payload.slug = await generateUniqueSlug(payload.servicesName, currentService?._id);
  }

  if (!payload.tourID && !currentService) {
    payload.tourID = await generateUniqueTourId();
  }

  if (uploadedThumbnail) {
    payload.thumbnail = buildPublicFilePath(uploadedThumbnail);
  } else if (!currentService && typeof payload.thumbnail === "string") {
    payload.thumbnail = payload.thumbnail.trim();
  } else if (!currentService && !payload.thumbnail) {
    delete payload.thumbnail;
  } else if (currentService && payload.thumbnail !== undefined) {
    payload.thumbnail = String(payload.thumbnail).trim();
  }

  const uploadedImagePaths = uploadedImages.map(buildPublicFilePath);

  if (!currentService) {
    payload.images = [...existingImages, ...uploadedImagePaths];
  } else if (uploadedImages.length > 0 || payload.images !== undefined) {
    payload.images = [...existingImages, ...uploadedImagePaths];
  } else {
    delete payload.images;
  }

  return payload;
};

module.exports.addServices = async (req, res) => {
  try {
    const payload = await prepareServicePayload(req);
    const newService = await services.create(payload);

    return res.status(201).json({
      message: "Them dich vu thanh cong",
      data: newService,
    });
  } catch (error) {
    removeUploadedFiles(req.files);

    return res.status(400).json({
      message: error.message || "Them dich vu that bai",
    });
  }
};

module.exports.putServices = async (req, res) => {
  try {
    const { id } = req.params;
    const currentService = await services.findById(id);

    if (!currentService) {
      removeUploadedFiles(req.files);

      return res.status(404).json({ message: "Khong tim thay dich vu" });
    }

    const payload = await prepareServicePayload(req, currentService);
    const updatedService = await services.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });

    if (!updatedService) {
      removeUploadedFiles(req.files);

      return res.status(404).json({ message: "Khong tim thay dich vu" });
    }

    if (req.files?.thumbnail?.[0] && currentService.thumbnail) {
      removeFileIfExists(currentService.thumbnail);
    }

    if (payload.images) {
      const removedImages = (currentService.images || []).filter(
        (image) => !payload.images.includes(image)
      );

      removedImages.forEach(removeFileIfExists);
    }

    return res.status(200).json({
      message: "Cap nhat dich vu thanh cong",
      data: updatedService,
    });
  } catch (error) {
    removeUploadedFiles(req.files);

    return res.status(400).json({
      message: error.message || "Cap nhat dich vu that bai",
    });
  }
};

module.exports.deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedService = await services.findByIdAndDelete(id);

    if (!deletedService) {
      return res.status(404).json({ message: "Khong tim thay dich vu" });
    }

    removeFileIfExists(deletedService.thumbnail);
    (deletedService.images || []).forEach(removeFileIfExists);

    return res.status(200).json({
      message: "Xoa dich vu thanh cong",
      data: deletedService,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Xoa dich vu that bai",
    });
  }
};

module.exports.deleteServices = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ message: "Danh sach ids khong hop le" });
    }

    const listServices = await services.find({ _id: { $in: ids } });
    const result = await services.deleteMany({ _id: { $in: ids } });

    listServices.forEach((item) => {
      removeFileIfExists(item.thumbnail);
      (item.images || []).forEach(removeFileIfExists);
    });

    return res.status(200).json({
      message: "Xoa nhieu dich vu thanh cong",
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Xoa nhieu dich vu that bai",
    });
  }
};

module.exports.servicesDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await services.findById(id);

    if (!service) {
      return res.status(404).json({ message: "Khong tim thay dich vu" });
    }

    return res.status(200).json({
      message: "Lay chi tiet dich vu thanh cong",
      data: service,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Lay chi tiet dich vu that bai",
    });
  }
};

module.exports.allServices = async (req, res) => {
  try {
    const listServices = await services.find({}).sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Lay danh sach dich vu thanh cong",
      data: listServices,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Lay danh sach dich vu that bai",
    });
  }
};
