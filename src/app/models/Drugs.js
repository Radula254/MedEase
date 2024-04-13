import mongoose, {model, models, Schema} from "mongoose";

const DrugsSchema = new Schema({
    image: {type: String},
    name: {type: String},
    description: {type: String},
    details: {type: String},
    selectedCategory: {type: mongoose.Types.ObjectId},
    price: {type: Number},
}, {timestamps: true});

export const Drugs = models?.Drugs || model('Drugs', DrugsSchema);