const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        match: [/^\S+@\S+\.\S+$/, 'Email không hợp lệ']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    address: {
        type: String
    },
    phone: {
        type: String,
        match: [/^[0-9]{9,11}$/, 'Số điện thoại không hợp lệ']
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    avatar: {
        type: String
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    role: {
        type: String,
        enum: ["user", "admin", "provider"],
        default: "user"
    }
}, {
    timestamps: true
});

const accounts = mongoose.model('accounts', accountSchema);
module.exports = accounts;