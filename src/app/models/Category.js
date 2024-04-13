import {model, models, Schema} from "mongoose";

const CategorySchema = new Schema({
    name: {type: String, required: true},
    image: {type: String},
    details: {type: String},
    description: {type: String},
}, {timestamps: true});

export const Category = models?.Category || model('Category', CategorySchema);