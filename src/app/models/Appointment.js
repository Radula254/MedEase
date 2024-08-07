import mongoose, {model, models, Schema} from "mongoose";

const DrugsGivenSchema = new Schema({
  medication: String,
  price: Number,
})

const AppointmentInfoSchema = new Schema(
  {
    email: { type: String, required: true},
    createdAppointment: { type: Boolean, default: false },
    symptoms: { type: String },
    selectedNurse: { type: mongoose.Types.ObjectId, default: null },
    consultationPrice: { type: String },
    consultationPayment: {type: Boolean, default: false},
    height: { type: String },
    weight: { type: String },
    heartRate: { type: String },
    preConditions: { type: String },
    consultationPrice: { type: String },
    status: { type: Boolean, default: false },
    selectedDoctor: { type: mongoose.Types.ObjectId, default: null },
    labResultStatus: {type: Boolean, default: true},
    labResults: { type: String },
    labResultsDone: {type: Boolean, default: false},
    diagnosis: { type: String },
    prescriptionsAndFrequency: {type: String},
    consulted: { type: Boolean, default: false },
    drugs: {type:[DrugsGivenSchema]},
    total: {type: String},
    paymentStatus: {type: Boolean, default: false},
    prescriptionsStatus: {type: Boolean, default: true},
  },
  { timestamps: true }
);

export const AppointmentInfo = models?.AppointmentInfo || model('AppointmentInfo', AppointmentInfoSchema);

