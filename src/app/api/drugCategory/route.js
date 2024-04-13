import { Category } from "@/app/models/Category";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const data = await req.json();
    const categoryDoc = await Category.create(data);
    return Response.json(categoryDoc);
}

export async function PUT(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const {_id, ...data} = await req.json();
    await Category.findByIdAndUpdate(_id, data);
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    return Response.json(
        await Category.find()
    )
}