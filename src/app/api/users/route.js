import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find();
    return Response.json(users);
}