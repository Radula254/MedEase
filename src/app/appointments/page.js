"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";

export default function AppointmentsPage() {
    const {loading:profileLoaing, data:profileData} =  useProfile();

    if (profileLoaing) {
        return 'Loading...';
    }

    if (!profileData.patient) {
        return 'Not a Patient';
    }
    return(
        <section className="mt-8">
            <UserTabs isPatient={true} />
            <h1>Appointments</h1>
        </section>
    )
}