"use client";
import DeleteButton from "@/components/DeleteButton";
import Left from "@/components/icons/Left";
import DrugForm from "@/components/layout/DrugForm";
import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditDrugsPage() {
  const { id } = useParams();
  const [drugs, setDrugs] = useState(null);
  const [redirectToDrugs, setRedirectToDrugs] = useState(false);
  const { loading, data } = useProfile();

  const isPharmacist = data.pharmacist;
  const isAdmin = data.admin;

  useEffect(() => {
    fetch("/api/drugs").then((res) => {
      res.json().then((drugs) => {
        const drug = drugs.find((i) => i._id === id);
        setDrugs(drug);
      });
    });
  }, []);

  async function handleFormSubmit(ev, data) {
    ev.preventDefault();
    data = { ...data, _id: id };
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/drugs", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Saved",
      error: "Error",
    });

    setRedirectToDrugs(true);
  }

  async function handleDeleteClick() {
    const deletePromise = new Promise(async (resolve, reject) => {
      const res = await fetch("/api/drugs?_id=" + id, {
        method: "DELETE",
      });
      if (res.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(deletePromise, {
      loading: "Deleting...",
      success: "Deleted",
      error: "Error",
    });

    setRedirectToDrugs(true);
  }

  if (redirectToDrugs) {
    return redirect("/drugs");
  }

  if (loading) {
    return "Loading...";
  }

  if (!data.pharmacist && !data.admin) {
    return (
      <div className="text-center my-28 font-extrabold text-5xl">
        <p style={{ color: "red" }}>Unauthorised!!!</p>
      </div>
    );
  }

  return (
    <section className="mt-10 mb-20">
      <div className="max-w-2xl mx-auto mt-8">
        <Link href={"/drugs"} className="button">
          <Left />
          <span>Show all drugs</span>
        </Link>
      </div>
          <DrugForm drugs={drugs} onSubmit={handleFormSubmit}/>
          <div className="max-w-2xl mx-auto mt-2">
            <div className="max-w-lg ml-auto pl-12">
              <DeleteButton label="Delete" onDelete={handleDeleteClick} />
            </div>
          </div>
    </section>
  );
}
