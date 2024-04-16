import mongoose from 'mongoose';
import { User } from "../../models/User";
import { NurseInfo } from '@/app/models/NurseInfo';
import { ReceptionistInfo } from '@/app/models/ReceptionistInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ receptionist: true });

    const usersWithDetails = [];

    for (const user of users) {
        const receptionistInfo = await ReceptionistInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            receptionistInfo
        });
    }

    return Response.json(usersWithDetails);
}
