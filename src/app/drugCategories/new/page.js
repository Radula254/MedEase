"use client";
import { useEffect, useState } from "react";
import { useProfile } from "@/components/UseProfile";
import toast from "react-hot-toast";
import CategoryForm from "@/components/layout/CategoryForm";
import Link from "next/link";
import Left from "@/components/icons/Left";
import { redirect } from "next/navigation";

export default function AddDrugCategoriesPage() {
    const [redirectToDrugs, setRedirectToDrugs] = useState(false);
    const [category, setCategory] = useState("");
    const {loading, data} = useProfile();

    async function handleNewCategorySubmit(ev, data) {
        ev.preventDefault();
        const savingPromise = new Promise(async(resolve, reject) => {
            const response = await fetch('/api/drugCategory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                resolve();
            }
            else {
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
        return redirect('/drugCategories');
    }


    if (loading) {
        return 'Loading...';
    }

    if (!data.pharmacist) {
        return 'Not Pharmacist';
    }

    return(
        <section className="mt-10 max-w-2xl mx-auto mb-20">
            <div className="mt-8">
                <Link className="button flex" href={"/drugCategories"}>
                    <Left />
                    <span>Show other drug categories</span>
                </Link>
            </div>
            <CategoryForm category={category} onSubmit={handleNewCategorySubmit} />
        </section>
    )
}