const services = require("../models/services.model.js");



module.exports.addServices = async (req, res) => {
  try {
    const {
      supplier,
      servicesName,
      category,
      destination,
      descriptionDetail,
      prices,
      rating,
      total_review,
      status,
      location,
      thumbnail,
      images,
      schedule,
      duration,
      highlights,
      includedServices,
      meals,
      experiences,
      accommodation,
      policies,
      supplierRating,
      tags,
    } = req.body;

    if (!servicesName || !prices || !destination) {
      return res.status(400).json({
        success: false,
        message: "Thiếu thông tin bắt buộc: servicesName, prices, destination",
      });
    }

    if (typeof prices !== "number" || prices <= 0) {
      return res.status(400).json({
        success: false,
        message: "Giá dịch vụ phải là số dương",
      });
    }

    if (rating && (rating < 0 || rating > 5)) {
      return res.status(400).json({
        success: false,
        message: "Rating phải nằm trong khoảng 0 - 5",
      });
    }

    // tourID sẽ tự sinh từ default trong schema
    const newService = new services({
      supplier,
      servicesName,
      category,
      destination,
      descriptionDetail,
      prices,
      rating,
      total_review,
      status,
      location,
      thumbnail,
      images,
      schedule,
      duration,
      highlights,
      includedServices,
      meals,
      experiences,
      accommodation,
      policies,
      supplierRating,
      tags,
    });

    const saveData = await newService.save();

    return res.status(201).json({
      success: true,
      message: "Thêm dịch vụ thành công",
      data: saveData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Lỗi khi thêm dịch vụ",
      error: error.message,
    });
  }
};


module.exports.putServices = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Nếu có file mới thì thay ảnh, nếu không thì giữ nguyên ảnh cũ từ body
    if (req.file) {
      updateData.thumbnail = req.file.path; // multer sẽ lưu vào /uploads
    }

    const updatedService = await services.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
      overwrite: true,
    });

    if (!updatedService) {
      return res.status(404).json({ message: "Service không tồn tại" });
    }

    return res.status(200).json({
      message: "Cập nhật toàn bộ dịch vụ thành công",
      data: updatedService,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi cập nhật dịch vụ",
      error: error.message,
    });
  }
};

module.exports.patchServices = async (req, res) => {
  try {
    const { id } = req.params;
    const updateFields = req.body;

    if (req.file) {
      updateFields.thumbnail = req.file.path;
    }

    const updatedService = await services.findByIdAndUpdate(
      id,
      { $set: updateFields },
      { new: true, runValidators: true },
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service không tồn tại" });
    }

    return res.status(200).json({
      message: "Cập nhật một phần dịch vụ thành công",
      data: updatedService,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi khi cập nhật dịch vụ",
      error: error.message,
    });
  }
};

// Xóa một service theo ID
module.exports.deleteOne = async (req, res) => {
  try {
    //lấy ra id services và xóa đi sv đó
    const { id } = req.params;
    const deletedService = await services.findByIdAndDelete(id);

    //check đk để xóa
    if (!deletedService) {
      return res.status(404).json({
        message: "Service không tồn tại",
      });
    }

    return res.status(200).json({
      message: "Xóa service thành công",
      data: deletedService,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};

// Xóa nhiều service theo danh sách ID
module.exports.deleteServices = async (req, res) => {
  try {
    const { ids } = req.body;
    // nhận mảng id từ body

    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({
        message: "Danh sách ID không hợp lệ",
      });
    }

    const DeleteMany = await services.deleteMany({ _id: { $in: ids } });
    return res
      .status(200)
      .json({
        message: "Xóa nhiều service thành công",
        deletedCount: DeleteMany,
      });
    return res.status(200).json({ message: "Xóa nhiều service thành công", deletedCount: DeleteMany, });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};

//hoàn thành
exports.servicesDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await services.findById(id);

    if (!service) {
      return res.status(404).json({
        message: "Không tìm thấy dịch vụ",
      });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};


module.exports.allServices = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 6;

    const skip = (page - 1) * limit;

    // lấy data phân trang
    const data = await services
      .find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    // tổng số lượng
    const total = await services.countDocuments();

    return res.status(200).json({
      success: true,
      message: "Lấy danh sách dịch vụ thành công",
      data: data,
      pagination: {
        page,
        limit,
        total,
        totalPage: Math.ceil(total / limit),
      }
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Lấy danh sách dịch vụ thất bại",
    });
  }
};

