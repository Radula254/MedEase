import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {type: String},
    email: { type: String, required: true, unique: true },
    password: {type: String},
    image: { type: String },
    admin: {type: Boolean, default: false},
    doctor: {type: Boolean, default: false},
    pharmacist: {type: Boolean, default: false},
    nurse: {type: Boolean, default: false},
    receptionist: {type: Boolean, default: false},
    labTech: {type: Boolean, default: false},
  },
  { timestamps: true }
);

export const User = models?.User || model('User', UserSchema);

