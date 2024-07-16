"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import AppointmentForm from "@/components/layout/AppointmentForm";
import PharmaAppointmentForm from "@/components/layout/PharmaAppointmentForm";

export default function EditUserPage() {
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
        window.location.href = "/appointments/pharmacist"
      } else {
        reject();
      }
    });

    await toast.promise(savePromise, {
      loading: "Dispensing...",
      success: "Drugs Dispensed",
      error: "Error saving!!",
    });
  }

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.pharmacist) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
          <p style={{ color: 'red' }}>Unauthorised!!!</p>
      </div>
    )
  }

  return (
    <section className="mt-10 mb-20">
      <div className="max-w-2xl mx-auto mt-8">
        <PharmaAppointmentForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
