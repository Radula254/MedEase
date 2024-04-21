import mongoose, {model, models, Schema} from "mongoose";

const DrugsGivenSchema = new Schema({
  medication: String,
  price: Number,
})

const AppointmentInfoSchema = new Schema(
  {
    email: { type: String, required: true},
    createdAppointment: { type: Boolean, default: false },
    selectedNurse: { type: mongoose.Types.ObjectId },
    height: { type: String },
    weight: { type: String },
    heartRate: { type: String },
    preConditions: { type: String },
    consultationPrice: { type: String },
    status: { type: Boolean, default: false },
    selectedDoctor: { type: mongoose.Types.ObjectId },
    labResultStatus: {type: Boolean, default: false},
    labResults: { type: String },
    labResultsDone: {type: Boolean, default: false},
    diagnosis: { type: String },
    prescriptionsAndFrequency: {type: String},
    consulted: { type: Boolean, default: false },
    drugs: {type:[DrugsGivenSchema]},
    total: {type: String},
    paymentStatus: {type: Boolean, default: false},
  },
  { timestamps: true }
);

export const AppointmentInfo = models?.AppointmentInfo || model('AppointmentInfo', AppointmentInfoSchema);

