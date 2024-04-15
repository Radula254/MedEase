import { model, models, Schema } from "mongoose";

const ReceptionistInfoSchema = new Schema(
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

export const ReceptionistInfo = models?.ReceptionistInfo || model('ReceptionistInfo', ReceptionistInfoSchema);

