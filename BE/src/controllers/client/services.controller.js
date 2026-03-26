// tao dich vu moi
export const createService = async (req, res) => {
    res.send("Tạo dịch vụ mới");
}

// cap nhat dich vu
export const UpdateService = async (req, res) => {
    res.send("Cập nhật dịch vụ");
}

//xoa dich vu
export const DeleteService = async (req, res) => {
    res.send("Xóa dịch vụ");
}

//get all
export const ListServices = async (req, res) => {
    res.send("Danh sách dịch vụ");
}
//get one 
export const ServicesDetail = async  (req, res) => {
    res.send("Chi tiết dịch vụ");
}
