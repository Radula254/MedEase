import mongoose from 'mongoose';
import { User } from "../../models/User";;
import { UserInfo } from '@/app/models/UserInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    const users = await User.find({ admin: false, doctor: false, nurse: false, receptionist: false, labTech: false,  });

    const usersWithDetails = [];

    for (const user of users) {
        const userInfo = await UserInfo.findOne({ email: user.email }).lean();
        usersWithDetails.push({
            ...user.toObject(),
            userInfo
        });
    }

    return Response.json(usersWithDetails);
}
