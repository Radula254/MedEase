import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { User } from "@/app/models/User";
import bcrypt from "bcrypt";

export const authOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: 'credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "johndoe@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Please enter both email and password.");
        }

        await mongoose.connect(process.env.NEXT_PUBLIC_MONGOURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("No user found with this email.");
        }

        const passwordOk = bcrypt.compareSync(password, user.password);

        if (!passwordOk) {
          throw new Error("Invalid password.");
        }

        return user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
