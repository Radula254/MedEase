import mongoose from 'mongoose';
import { User } from "../../models/User";
import { NurseInfo } from '@/app/models/NurseInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ nurse: true });

    const usersWithDetails = [];

    for (const user of users) {
        const nurseInfo = await NurseInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            nurseInfo
        });
    }

    return Response.json(usersWithDetails);
}
