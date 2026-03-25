const mongoose = require('mongoose');
require('dotenv').config()
module.exports.ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {         
        });
        console.log('MongoDB Đã kết nối thành công!');
    }
    catch (error) {
        console.error('MongoDB thất bại :', error.message);
    }

};

