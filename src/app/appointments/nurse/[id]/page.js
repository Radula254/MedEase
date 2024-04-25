"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import UserForm from "@/components/layout/UserForm";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import AppointmentForm from "@/components/layout/AppointmentForm";

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
      } else {
        reject();
      }
    });

    await toast.promise(savePromise, {
      loading: "Saving...",
      success: "Profile Saved",
      error: "Error saving!!",
    });
  }

  if (profileLoading) {
    return "Loading ...";
  }

  if (!profileData.nurse) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
          <p style={{ color: 'red' }}>Unauthorised!!!</p>
      </div>
    )
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <div className="max-w-2xl mx-auto mt-8">
        <AppointmentForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
