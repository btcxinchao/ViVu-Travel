const accounts = require("../models/account.models.js")
const bcrypt = require("bcrypt")

module.exports.register = async  (req, res) => {
    const {fullName, email, password,confirmPass} = req.body

    // Kiểm tra dữ liệu đầu vào : init 
    if(!fullName || !email || !password || !confirmPass){
        return res.status(400).json({message: "Thiếu thông tin đăng ký"})
    }

    //kiểm tra pass vừa nhập lại một lần nữa 
    if(confirmPass !== password){
        return res.status(400).json({message:"Mật khẩu xác nhận không khớp"})
    }

    //kiểm tra tài khoản đăng kí đã tồn tại hay chưa 
    const existAccount  = await accounts.findOne({ $or: [{ email }, { fullName }] })
    if(existAccount){
         return res.status(400).json({message:"Tài khoản đã tồn tại"})
    }
    //hash mật khẩu 
    const hashedPassword = await bcrypt.hash(password,10);

    //tạo tài khoản 
    const newAccount = await accounts.create({
        fullName,
        email,
        password :hashedPassword
    })  
    res.status(200).json({
        message: 'Đăng ký thành công',
        data: { 
            newAccount
        }
    })
}
module.exports.login = (req, res) => {
    res.send('Đăng nhập thành công')
}
module.exports.logout = (req, res) => {
    res.send('Đăng xuất thành công')
}
