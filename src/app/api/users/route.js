import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function GET() {
  // Ensure the connection to MongoDB
  mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL);

  // Using aggregation to perform a join operation with the UserInfo collection
  const users = await User.aggregate([
    {
      $lookup: {
        from: "userinfos", // the collection to join
        localField: "email", // field from the users collection
        foreignField: "email", // field from the userInfo collection
        as: "userinfos", // output array field
      },
    },
    {
      $match: {
        userinfos: { $ne: [] }, // filter to include only users with corresponding userInfo
      },
    },
    {
      $project: {
        _id: 1,
        name: 1,
        email: 1,
        userinfos: 1,
      },
    },
  ]);

  // Convert the result to JSON and return the response
  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
