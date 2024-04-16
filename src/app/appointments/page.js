"use client";
import AppointmentForm from "@/components/layout/AppointmentForm";
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
        <section className="mt-10 max-w-4xl mx-auto mb-20">
            <h1 className="mb-4 text-center font-bold text-xl">Appointment</h1>
            <AppointmentForm user={null} />
        </section>
    )
}