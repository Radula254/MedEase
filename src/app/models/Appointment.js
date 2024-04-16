import { model, models, Schema } from "mongoose";

const AppointmentInfoSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    createdAppointment: { type: Boolean, default: false },
    nurse: { type: mongoose.Types.ObjectId },
    height: { type: String },
    weight: { type: String },
    heartRate: { type: String },
    preConditions: { type: String },
    consultationPrice: { type: String },
    status: { type: Boolean, default: false },
    doctor: { type: mongoose.Types.ObjectId },
    labResultStatus: {type: Boolean, default: false},
    labResults: { type: String },
    prescriptionsAndFrequency: {type: String},
    consulted: { type: Boolean, default: false },
    drugsGiven: { type: mongoose.Types.ObjectId },
    total: {type: String},
    paymentStatus: {type: Boolean, default: false},
  },
  { timestamps: true }
);

export const AppointmentInfo = models?.AppointmentInfo || model('AppointmentInfo', AppointmentInfoSchema);

