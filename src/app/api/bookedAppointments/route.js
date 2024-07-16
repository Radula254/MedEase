import mongoose from 'mongoose';
import { User } from "../../models/User";
import { AppointmentInfo } from "@/app/models/Appointment";

export async function GET(req) {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  }

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  const role = searchParams.get('role');

  let roleFilter = {};
  if (role === 'doctor') {
    roleFilter = { selectedDoctor: userId };
  } else if (role === 'nurse') {
    roleFilter = { selectedNurse: userId };
  }

  const appointments = await AppointmentInfo.find({
    ...roleFilter,
    createdAppointment: true
  }).lean();

  const userEmails = appointments.map(appointment => appointment.email);

  const users = await User.find({
    email: { $in: userEmails },
    admin: false,
    doctor: false,
    nurse: false,
    receptionist: false,
    labTech: false
  }).lean();

  const usersWithDetails = users.map(user => {
    const userInfo = appointments.find(app => app.email === user.email);
    return {
      ...user,
      userInfo
    };
  });

  return new Response(JSON.stringify(usersWithDetails), { status: 200 });
}
