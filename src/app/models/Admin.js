import {model, models, Schema} from "mongoose";

const AdminSchema = new Schema({
    name: {type: String},
    email: {type: String, unique: true},
    password: {type: String},
    image: { type: String },
    phone: { type: String },
    streetAddress: { type: String },
    postalCode: { type: String },
    city: { type: String },
    country: { type: String },
    admin: {type: Boolean, default: true}
}, {timestamps: true});

export const Admin = models?.Admin || model('Admin', AdminSchema);