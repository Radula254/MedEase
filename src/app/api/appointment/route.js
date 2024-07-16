import { AppointmentInfo } from "../../models/Appointment";
import mongoose from "mongoose";

export async function POST(req) {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const data = await req.json();
    const drugsDoc = await AppointmentInfo.create(data);
    return Response.json(drugsDoc);
}

