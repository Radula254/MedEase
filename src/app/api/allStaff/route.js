import mongoose from 'mongoose';
import { User } from "../../models/User";

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ staff: true });  // Adding the query for staff true
    return Response.json(users);
}
