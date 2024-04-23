import mongoose from 'mongoose';
import { User } from "../../models/User";
import { AppointmentInfo } from "@/app/models/Appointment";

export async function GET() {
    if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    }

    const users = await User.find({
        admin: false,
        doctor: false,
        nurse: false,
        receptionist: false,
        labTech: false
    }).lean(); 

    const usersWithDetailsPromises = users.map(async user => {
        const userInfo = await AppointmentInfo.findOne({
            email: user.email,
            createdAppointment: true,
        }).lean();

        return {
            ...user,
            userInfo
        };
    });

    const usersWithDetails = await Promise.all(usersWithDetailsPromises);

    return Response.json(usersWithDetails);
}

