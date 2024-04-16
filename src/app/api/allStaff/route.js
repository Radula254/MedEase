import mongoose from 'mongoose';
import { User } from "../../models/User";
import { NurseInfo } from '@/app/models/NurseInfo';
import { DoctorInfo } from '@/app/models/DoctorInfo';
import { ReceptionistInfo } from '@/app/models/ReceptionistInfo';
import { LabTechInfo } from '@/app/models/LabTechInfo';
import { PharmacistInfo } from '@/app/models/PharmacistInfo';

export async function GET() {
    mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

    const criteria = {
        $or: [
            { 'nurse': true },
            { 'doctor': true },
            { 'pharmacist': true },
            { 'receptionist': true },
            { 'labTech': true },
        ]
    };
    const users = await User.find(criteria);

    const usersWithDetails = [];

    for (const user of users) {
        // Parallel queries to fetch role-specific info only if staff=true
        const [nurseInfo, doctorInfo, pharmacistInfo, receptionistInfo, labTechInfo] = await Promise.all([
            NurseInfo.findOne({ email: user.email, staff: true }).lean(),
            DoctorInfo.findOne({ email: user.email, staff: true }).lean(),
            PharmacistInfo.findOne({ email: user.email, staff: true }).lean(),
            ReceptionistInfo.findOne({ email: user.email, staff: true }).lean(),
            LabTechInfo.findOne({ email: user.email, staff: true }).lean(),
        ]);

        const roleInfo = doctorInfo || nurseInfo || pharmacistInfo || receptionistInfo || labTechInfo || {};

        usersWithDetails.push({
            ...user.toObject(),
            ...roleInfo,
        });
    }
    return Response.json(usersWithDetails);
}
