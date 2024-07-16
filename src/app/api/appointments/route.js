import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "../../models/User";
import {UserInfo} from "../../models/UserInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";
import { AppointmentInfo } from "@/app/models/Appointment";

export async function POST(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

  const data = await req.json();
  const { _id, name, image, ...otherUserInfo } = data;

  let filter = {};
  let userEmail;

  if (_id) {
      filter = { _id };
  } else {
      const session = await getServerSession(req, req.res, authOptions);
      userEmail = session?.user?.email;
      if (!userEmail) {
          return new Response("Email not found in session", { status: 400 });
      }
      filter = { email: userEmail };
  }

  const user = await User.findOne(filter);
  if (!user) {
      return new Response("User not found", { status: 404 });
  }

  // Ensure email from user is used if not already defined from session for non-_id cases
  userEmail = userEmail || user.email;

  // Create a new AppointmentInfo document
  const newAppointment = new AppointmentInfo({
      ...otherUserInfo,
      email: userEmail
  });

  await newAppointment.save();

  return Response.json(true);
}

export async function PUT(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  const data = await req.json();
  const {_id, name, image, ...otherUserInfo} = data;

  let filter = {};
  if (_id) {
    filter = {_id};
  } else {
    const session = await getServerSession(authOptions);
    const email = session.user.email;
    filter = {email};
  }

  const user = await User.findOne(filter);
  await User.updateOne(filter, {name, image});
  await AppointmentInfo.findOneAndUpdate({email:user.email}, otherUserInfo, {upsert:true});

  return Response.json(true);
}

export async function GET(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');

  let filterUser = {};
  if (_id) {
    filterUser = {_id};
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = {email};
  }

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserInfo.findOne({email:user.email}).lean();
  const appointmentInfo = await AppointmentInfo.findOne({email:user.email}).lean();

  console.log(userInfo)

  return Response.json({...user, ...appointmentInfo , ...userInfo});

}