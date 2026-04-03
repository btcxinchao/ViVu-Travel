const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const serviceSchema = new mongoose.Schema({
  tourID: {
    type: String,
    unique: true,
    default: () => uuidv4() // tự sinh UUID khi tạo mới
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
    default: "pending",
  },
  location: {
    type: String
  },
  thumbnail: {
    type: String
  },
  images: [{
    type: String
  }],
  schedule: [{
    day: Number,
    title: String,
    description: String
  }],
  duration: {
    type: String
  },
  highlights: [{
    type: String
  }],
  includedServices: [{
    type: String
  }],
  meals: {
    type: Number
  },
  experiences: {
    type: Number
  },
  accommodation: [{
    day: Number,
    hotel: String
  }],
  policies: [{
    type: String
  }],
  supplierRating: {
    type: Number
  },
  tags: [{
    type: String
  }],
}, {
  timestamps: true
});

const Services = mongoose.model("services", serviceSchema);

module.exports = Services;
