const services = require("../models/services.model.js")

// 1 thêm dịch vụ 
module.exports.addServices = (req,res)=>{
         res.send("them dich vu ")
}
//2 cập nhật dịch vụ 
module.exports.updateServices = (req,res)=>{
         res.send("cập nhật dich vu ")
}
//3 xóa 1 dịch vụ 
module.exports.deleteOne = (req,res)=>{
         res.send("xóa 1  dich vu ")
}

//4 xóa nhiều dịch vụ 
module.exports.deleteServices = (req,res)=>{
         res.send("xóa nhiều  dich vu ")
}

//5 lấy chi tiết 1 dịch vụ 
module.exports.servicesDetail = (req,res)=>{
         res.send("lấy 1 dich vu ")
}

//6 lấy tất cả dịch vụ 
module.exports.allServices = (req,res)=>{
         res.send("lấy nhiều  dich vu ")
}


