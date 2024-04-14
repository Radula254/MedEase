"use client";
import StaffForm from "@/components/layout/StaffForm";
import UserForm from "@/components/layout/UserForm";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditPharmacistPage() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/api/pharmacist?_id=" + id).then((response) => {
      response.json().then((pharmacy) => {
        setUser(pharmacy);
      })
    });
  }, []);



  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
        const response = await fetch('/api/pharmacist', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...data, _id:id}),
        });
        if (response.ok) {
            resolve();
        } else {
            reject();
        }
    });

    await toast.promise(savingPromise, {
        loading: 'Saving...',
        success: 'Saved',
        error: 'Error',
    });
}


  return (
    <section className="mt-10 mb-20 max-w-2xl mx-auto">
      <h1 className="text-center font-bold text-xl">Edit Pharmacist</h1>
      <StaffForm user={user} onSave={handleFormSubmit}/>
    </section>
  );
}
