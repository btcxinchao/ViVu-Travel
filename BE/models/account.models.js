const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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