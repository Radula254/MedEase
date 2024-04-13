import {model, models, Schema} from "mongoose";

const DoctorSchema = new Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
}, {timestamps: true});

export const Doctor = models?.Doctor || model('Doctor', DoctorSchema);