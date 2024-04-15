import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "../../models/User";
import { DoctorInfo } from "@/app/models/DoctorInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";


export async function PUT(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  const data = await req.json();
  const {_id, name, image, ...otherDoctorInfo} = data;

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
  await DoctorInfo.findOneAndUpdate({email:user.email}, otherDoctorInfo, {upsert:true});

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
  const doctorInfo = await DoctorInfo.findOne({email:user.email}).lean();

  return Response.json({...user, ...doctorInfo});

}
