"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import AppointmentForm from "@/components/layout/AppointmentForm";
import ReceptionistForm from "@/components/layout/ReceptionistForm";
import { useSession } from "next-auth/react";
import PatientAppointmentForm from "@/components/layout/PatientAppointmentForm";

export default function PatientBookingAppointmentPage() {
  const [user, setUser] = useState(null);
  const session = useSession();
  const [profileFetched, setProfileFetched] = useState(false);
  const {status} = session;
  const [isPatient, setIsPatient] = useState(false);
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/profile").then((res) => {
      res.json().then((user) => {
        setUser(user);
        console.log(user)
      });
    });
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savePromise, {
      loading: "Saving...",
      success: "Saved",
      error: "Error saving!!",
    });
  }

 
  return (
    <section className="my-14">
      <UserTabs isPatient={true}/>
      <div className="max-w-2xl mx-auto mt-8">
        <PatientAppointmentForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
