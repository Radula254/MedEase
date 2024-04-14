"use client";
import PharmaDashboard from "@/components/layout/PharmaDashboard/PharmaDashboard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function PharmaHomePage() {
  const session = useSession();
  const {status} = session;
  const [isPharmacist, setIsPharmacist] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
            if (data.pharmacistCheck) {
                setIsPharmacist(true);
            }
            else {
                setIsPharmacist(false);
            }
        });
      });
    }
  }, [session, status]);

  if (status === "loading") {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect('/login');
  }

  if (!isPharmacist) {
    return "Not Authorised"
  }


    return(
        <section className="mt-8 mb-20">
            <h1 className="font-bold text-2xl text-center underline">DashBoard</h1>
            <PharmaDashboard />
        </section>
    )
}