import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "../../models/User";
import {PharmacistInfo} from "../../models/PharmacistInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

export async function PUT(req) {
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);
  const data = await req.json();
  const {_id, name, image, ...otherPharmacistInfo} = data;

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
  await PharmacistInfo.findOneAndUpdate({email:user.email}, otherPharmacistInfo, {upsert:true});

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
  const pharmacistInfo = await PharmacistInfo.findOne({email:user.email}).lean();

  return Response.json({...user, ...pharmacistInfo});

}