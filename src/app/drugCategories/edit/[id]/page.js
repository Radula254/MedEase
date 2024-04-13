"use client";
import { useEffect, useState } from "react";
import { useProfile } from "@/components/UseProfile";
import toast from "react-hot-toast";
import CategoryForm from "@/components/layout/CategoryForm";
import Link from "next/link";
import { useParams } from "next/navigation";
import Left from "@/components/icons/Left";
import DeleteButton from "@/components/DeleteButton";

export default function EditDrugCategoriesPage() {
    const { id } = useParams();
    const [category, setCategory] = useState("");
    const [redirectToDrugs, setRedirectToDrugs] = useState(false);
    const { loading: profileLoading, data: profileData } = useProfile();

    useEffect(() => {
        fetch('/api/drugCategory').then((res) => {
            res.json().then((categoryItems) => {
                const categoryItem = categoryItems.find((i) => i._id === id );
                setCategory(categoryItem);
            })
        })
    })

    async function handleEditCategorySubmit(ev, data) {
        ev.preventDefault();
        data = {...data, _id: id};
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/drugCategory', {
                method: "PUT",
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
            loading: "Saving...",
            success: "Saved",
            error: "Error",
        });
    }

    async function handleDeleteClick() {
        const deletePromise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/drugs?_id='+id, {
                method: 'DELETE',
            });
            if (res.ok) {
                resolve();
            } else {
                reject();
            }
        });

        await toast.promise(deletePromise, {
            loading: 'Deleting...',
            success: 'Deleted',
            error: 'Error',
        });

        setRedirectToDrugs(true);
    }

    if (redirectToDrugs) {
        return redirect('/drugCategories');
    }

    if (profileLoading) {
        return "Loading...";
      }
    
      if (!profileData.patient) {
        return "Unauthorised!!!";
      }

    return(
        <section className="mt-10 max-w-2xl mx-auto mb-20">
            <div className="max-w-2xl mx-auto mt-8">
                <Link href={'/drugCategories'} className="button">
                    <Left />
                    <span>Show all drugs</span>
                </Link>
            </div>
            <CategoryForm category={category} onSubmit={handleEditCategorySubmit} />
            <div className="max-w-2xl mx-auto mt-2">
                <div className="max-w-lg ml-auto pl-12">
                    <DeleteButton label="Delete" onDelete={handleDeleteClick} />
                </div>
            </div>
        </section>
    )
}