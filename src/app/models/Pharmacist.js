import {model, models, Schema} from "mongoose";

const PharmacistSchema = new Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
}, {timestamps: true});

export const Pharmacist = models?.Pharmacist || model('Pharmacist', PharmacistSchema);