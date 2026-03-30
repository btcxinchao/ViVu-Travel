// tao dich vu moi
import Service from "../../models/Services.js";
import User from "../../models/User.js";
export const createService = async (req, res) => {
 try {
    const {title,code,description,thumbnail,price, discount,gathering, schedule, provider,} = req.body;

    if (!title || !code || !description || !price || !provider) {
      return res.status(400).json({
        success: false,
        message: "Thiếu dữ liệu bắt buộc",
      });
    }
    // Check code trùng
    const existingCode = await Service.findOne({ code });
    if (existingCode) {
      return res.status(400).json({success: false,message: "Code đã tồn tại"});
    }
     // Check provider có tồn tại không
    const user = await User.findById(provider);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Provider không tồn tại",
      });
    }
    //tao slug từ title
    const slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    //  provider
    if (user.role !== "provider") {
      return res.status(403).json({success: false,message: "User không phải provider",
      });
    }
    const newService = new Service({
      title,code,description,
      thumbnail,price,discount,
      gathering,schedule,provider,slug
    });
    await newService.save();

    return res.status(201).json({ success: true, message: "Tạo service thành công", data: newService,});
 }catch (error) {   
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
}   
}
// cap nhat dich vu theo id cua dich vu do 
export const UpdateService = async (req, res) => {
  try {
    const { id } = req.params;
    const {title,code,description, thumbnail,price,discount, gathering,  schedule, provider, status} = req.body;
    const service = await Service.findByIdAndUpdate(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service không tồn tại",
      });
    }
    //check mã trùng hay không 
    if (code && code !== service.code) {
      const existingCode = await Service.findOne({ code });
      if (existingCode) {
        return res.status(400).json({success: false,message: "Code đã tồn tại"});
      }
    }
    //update slug nếu title thay đổi
    let slug = service.slug;
    if (title && title !== service.title) {
      slug = title.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    }
    service.title = title || service.title;
    service.code = code || service.code;
    service.description = description || service.description;
    service.thumbnail = thumbnail || service.thumbnail;
    service.price = price || service.price;
    service.discount = discount || service.discount;
    service.gathering = gathering || service.gathering;
    service.schedule = schedule || service.schedule;
    service.provider = provider || service.provider;
    service.status = status || service.status;
    service.slug = slug;
    await service.save();
    return res.status(200).json({ success: true, message: "Cập nhật service thành công", data: service });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Lỗi server" });
  }
}
//xoa dich vu theo id 
export const DeleteService = async (req, res) => {
  try
  {
    const { id } = req.params;
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service không tồn tại",
      });
    }
    await Service.findByIdAndDelete(id);
    return res.status(200).json({ success: true, message: "Xóa service thành công" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Lỗi server" });
  }
}


//get all
export const GetAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: services });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Lỗi server" });
  }
}
//get one 
export const ServicesDetail = async  (req, res) => {
    const { id } = req.params;
    try {
      const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service không tồn tại",
            });
        }   
        return res.status(200).json({ success: true, data: service });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Lỗi server" });
    }   
}
