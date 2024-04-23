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

export default function BookingAppointmentPage() {
  const [user, setUser] = useState(null);
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/appointments?_id=" + id).then((res) => {
      res.json().then((user) => {
        setUser(user);
      });
    });
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/appointments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _id: id }),
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

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.doctor) {
    return "Unauthorised!!!";
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl mb-20">
      <div className="max-w-2xl mx-auto mt-8">
        <ReceptionistForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
