"use client";
import PharmaDashboard from "@/components/layout/PharmaDashboard/PharmaDashboard";
import { useProfile } from "@/components/UseProfile";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function PharmaHomePage() {
  const session = useSession();
  const {status} = session;
  const { loading: profileLoading, data: profileData } = useProfile();

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect('/login');
  }

  if (!profileData.pharmacist) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
          <p style={{ color: 'red' }}>Unauthorised!!!</p>
      </div>
    )
  }


    return(
        <section className="mt-8 mb-20">
            <h1 className="font-bold text-2xl text-center underline">DashBoard</h1>
            <PharmaDashboard />
        </section>
    )
}