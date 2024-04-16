import mongoose from 'mongoose';
import { User } from "../../models/User";
import { LabTechInfo } from '@/app/models/LabTechInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ labTech: true });

    const usersWithDetails = [];

    for (const user of users) {
        const labTechInfo = await LabTechInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            labTechInfo
        });
    }

    return Response.json(usersWithDetails);
}
