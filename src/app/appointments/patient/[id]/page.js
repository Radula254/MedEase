"use client";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import PatientAppointmentForm from "@/components/layout/PatientAppointmentForm";
import { useSession } from "next-auth/react";

export default function EditUserPage() {
  const [user, setUser] = useState(null);
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          setUser(data);
        });
      });
    }
  }, [session, status]);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/appointment", {
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

    // Redirect to home page after successful save
    window.location.href = "/";
  }

  if (profileLoading || status === "loading") {
    return "Loading ...";
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <div className="max-w-2xl mx-auto mt-8">
        <PatientAppointmentForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
