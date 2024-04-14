import { model, models, Schema } from "mongoose";

const DoctorInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    salary: {type: String},
    doctor: {type: Boolean, default: true}
  },
  { timestamps: true }
);

export const DoctorInfo = models?.DoctorInfo || model('DoctorInfo', DoctorInfoSchema);

