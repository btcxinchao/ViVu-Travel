const services = require("../models/services.model.js");

module.exports.addServices = async (req, res) => {
  try {
    // Lấy dữ liệu từ body gửi lên
    const { tourID, supplier, servicesName, slug,
      category, destination,descriptionDetail,prices, rating,
      total_review, status, location, thumbnail, images, schedule,
      duration,highlights,includedServices,meals, experiences,
      accommodation,policies, supplierRating,tags,} = req.body;

    // Tạo service mới
    const newService = new services({
      tourID,
      supplier,
      servicesName,
      slug,
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
      meals,experiences,
      accommodation, policies,
      supplierRating, tags,
    });

    // Lưu vào DB
    const saveData = await newService.save();

    return res.status(201).json({
      message: "Thêm dịch vụ thành công",
      data: saveData,
    });
  } catch (error) {
    return res.status(500).json({
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

    const updatedService = await services.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true, overwrite: true }
    );

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
      { new: true, runValidators: true }
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
    const {
      id
    } = req.params;
    const deletedService = await Services.findByIdAndDelete(id);

    //check đk để xóa
    if (!deletedService) {
      return res.status(404).json({
        message: "Service không tồn tại"
      });
    }

    return res.status(200).json({
      message: "Xóa service thành công",

      //id sản phẩm đã xóa
      data: deletedService,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server"
    });
  }
};

// Xóa nhiều service theo danh sách ID
module.exports.deleteServices = async (req, res) => {
  try {
    const {
      ids
    } = req.body;
    // nhận mảng id từ body

    if (!ids || !Array.isArray(ids)) {
      return res.status(400).json({
        message: "Danh sách ID không hợp lệ"
      });
    }

    const result = await Services.deleteMany({
      _id: {
        $in: ids
      }
    });

    return res.status(200).json({
      message: "Xóa nhiều service thành công",
      deletedCount: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server"
    });
  }
};
//hoàn thành
exports.servicesDetail = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const service = await services.findById(id);

    if (!service) {
      return res.status(404).json({
        message: "Không tìm thấy dịch vụ"
      });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

//hoàn thành
module.exports.allServices = async (req, res) => {
  try {
    const listServices = await services.find({}).sort({
      createdAt: -1
    });

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