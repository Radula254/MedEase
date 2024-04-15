import mongoose from 'mongoose';
import { User } from "../../models/User";
import { DoctorInfo } from "@/app/models/DoctorInfo";

export async function GET() {
    // Connect to MongoDB
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
    
    // Find all users who are doctors
    const users = await User.find({ doctor: true });

    // Initialize an array to hold users with their detailed doctor info
    const usersWithDetails = [];

    // Iterate over each user to fetch their corresponding doctor info
    for (const user of users) {
        const doctorInfo = await DoctorInfo.findOne({ email: user.email }).lean();

        // Merge the doctorInfo into the user object
        usersWithDetails.push({
            ...user.toObject(),
            doctorInfo
        });
    }

    // Return the combined data
    return Response.json(usersWithDetails);
}
