import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, // doc nhat
      trim: true,
      lowercase: true,
    },
    hashedPassword: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    avatarUrl: {
      type: String, // link CDN de hien thi hinh
    },
    avatarId: {
      type: String, // Cloudinary public_id de xoa hinh
    },
    phone: {
      type: String,
      sparse: true, // cho phep null, nhung ko dc trung
    },
    role: {
      type: String,
      enum: ["client", "provider", "admin"],
      default: "client",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);
export default User;
