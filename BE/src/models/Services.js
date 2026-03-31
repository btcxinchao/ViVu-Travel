import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String, // ảnh chính
    },

    url: {
      type: String, // link SEO hoặc detail page
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
    },

    rate: {
      type: Number,
      default: 0,
    },

    sold: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "active",
    },

    slug: {
      type: String,
      unique: true,
    },

    gathering: {
      type: String, // ví dụ: group tour, cá nhân,...
    },

    schedule: [
      {
        date: String,
        timeSlots: [String],
      },
    ],

    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Service", serviceSchema);
