import mongoose from 'mongoose';
import { User } from "../../models/User";
import { PharmacistInfo } from '@/app/models/PharmacistInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ pharmacist: true });

    const usersWithDetails = [];

    for (const user of users) {
        const pharmacistInfo = await PharmacistInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            pharmacistInfo
        });
    }

    return Response.json(usersWithDetails);
}
