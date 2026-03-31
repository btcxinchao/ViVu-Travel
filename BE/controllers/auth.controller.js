const accounts = require("../models/account.models.js")


module.exports.register = async  (req, res) => {
    const {fullName, email, password} = req.body
    
    const newAccount = await accounts.create({
        fullName,
        email,
        password
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
