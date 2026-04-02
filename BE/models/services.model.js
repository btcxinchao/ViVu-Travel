const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    tourID: {
        type: String,
        unique: true
    },
    supplier: {
        type: String,
        required: true
    },
    servicesName: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    descriptionDetail: {
        type: String
    },
    prices: {
        type: Number,
        required: true,
        min: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    total_review: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["approval", "reject", "pending"],
        default: "pending"
    },
    location: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: [
        {
            type: String
        }
    ],
    schedule: [
        {
            day: Number,
            title: String,
            description: String
        }
    ]
}, {
    timestamps: true
});

const Services = mongoose.model('services', serviceSchema);

module.exports = Services;