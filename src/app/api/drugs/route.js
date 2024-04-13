import { Drugs } from "@/app/models/Drugs";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const data = await req.json();
    const drugsDoc = await Drugs.create(data);
    return Response.json(drugsDoc);
}

export async function PUT(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const {_id, ...data} = await req.json();
    await Drugs.findByIdAndUpdate(_id, data);
    return Response.json(true);
}

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    return Response.json(
        await Drugs.find()
    )
}

export async function DELETE(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const url = new URL(req.url);
    const _id = url.searchParams.get('_id');
    await Drugs.deleteOne({_id});
    return Response.json(true);
}