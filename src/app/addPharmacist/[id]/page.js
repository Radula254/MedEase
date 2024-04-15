"use client";
import UserTabs from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";
import StaffForm from "@/components/layout/StaffForm";

export default function EditUserPage() {
  const [user, setUser] = useState(null);
  const { loading: profileLoading, data: profileData } = useProfile();
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/pharmacist?_id=" + id).then((res) => {
      res.json().then(user => {
        setUser(user);
      });
    });
  }, []);

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();
    const savePromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/pharmacist", {
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

  if (!profileData.patient) {
    return "Unauthorised!!!";
  }

  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="max-w-2xl mx-auto mt-10 mb-20">
        <StaffForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}
