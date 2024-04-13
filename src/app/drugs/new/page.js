"use client";
import Left from "@/components/icons/Left";
import DrugForm from "@/components/layout/DrugForm";
import EditableImage from "@/components/layout/EditableImage";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function NewDrugsPage() {

    const [redirectToDrugs, setRedirectToDrugs] = useState(false);
    const {loading, data} = useProfile();

    async function handleFormSubmit(ev, data) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/drugs', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
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

        setRedirectToDrugs(true);
    }

    if (redirectToDrugs) {
        return redirect('/drugs');
    }

    if (loading) {
        return 'Loading...';
    }

    if (!data.patient) {
        return 'Not an admin';
    }

    return(
        <section className="mt-10 mb-20">
            <div className="max-w-2xl mx-auto mt-8">
                <Link href={'/drugs'} className="button">
                    <Left />
                    <span>Show all drugs</span>
                </Link>
            </div>
            <DrugForm drugs={null} onSubmit={handleFormSubmit}/>
        </section>
    )
}