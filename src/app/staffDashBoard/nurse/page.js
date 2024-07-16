"use client";
import NurseDashboard from "@/components/layout/NurseDashBoard/NurseDashBoard";
import { useProfile } from "@/components/UseProfile";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function NurseHomePage() {
  const session = useSession();
  const { status } = session;
  const { loading: profileLoading, data: profileData } = useProfile();

  if (status === "loading" || profileLoading) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  console.log(profileData);

  if (!profileData.nurse) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: "red" }}>Unauthorised!!!</p>
      </div>
    );
  }

  return (
    <section className="mt-8 mb-20">
      <h1 className="font-bold text-2xl text-center underline">DashBoard</h1>
      <NurseDashboard />
    </section>
  );
}
