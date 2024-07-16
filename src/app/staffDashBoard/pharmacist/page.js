"use client";
import PharmaDashboard from "@/components/layout/PharmaDashboard/PharmaDashboard";
import { useProfile } from "@/components/UseProfile";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function PharmacistHomePage() {
  const { data: session, status } = useSession();
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  if (status === "loading" || profileLoading) {
    return <div className="text-center my-28 font-bold text-2xl">Loading...</div>;
  }

  if (!profileData?.pharmacist) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: "red" }}>Unauthorised!!!</p>
      </div>
    );
  }

  return (
    <section className="mt-8 mb-20">
      <h1 className="font-bold text-2xl text-center underline">DashBoard</h1>
      <PharmaDashboard />
    </section>
  );
}
