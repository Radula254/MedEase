import { model, models, Schema } from "mongoose";

const LabTechInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    salary: {type: String},
    staff: {type: Boolean, default: true}
  },
  { timestamps: true }
);

export const LabTechInfo = models?.LabTechInfo || model('LabTechInfo', LabTechInfoSchema);

