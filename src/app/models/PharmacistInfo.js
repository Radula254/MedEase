import { model, models, Schema } from "mongoose";

const PharmacistInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    salary: {type: String},
    pharmacistCheck: {type: Boolean, default: true}
  },
  { timestamps: true }
);

export const PharmacistInfo = models?.PharmacistInfo || model('PharmacistInfo', PharmacistInfoSchema);

