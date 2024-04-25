"use client";
import { useEffect, useState } from "react";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import Right from "@/components/icons/Right";
import Image from "next/image";

export default function DrugCategoriesPage() {
    const [category, setCategory] = useState("");
    const {loading, data} = useProfile();
    const isPharmacist = data.pharmacist;

    useEffect(() => {
        fetch('/api/drugCategory').then(res => {
            res.json().then(category => {
                setCategory(category)
            });
        });
    }, []);

    if (loading) {
        return 'Loading...';
    }

    if (!data.pharmacist && !data.admin) {
        return (
            <div className="text-center my-28 font-extrabold text-5xl">
                <p style={{ color: 'red' }}>Unauthorised!!!</p>
            </div>
          )
    }

    return(
        <section className="mt-10 mb-20 max-w-2xl mx-auto">
            {isPharmacist && (
                <div className="mt-8">
                <Link className="button flex" href={"/drugCategories/new"}>
                    <span>Create a new drug category</span>
                    <Right />
                </Link>
            </div>
            )}
            <div>
            <h2 className="text-sm text-gray-500 mt-8">Edit drug category:</h2>
                <div className="grid grid-cols-3 gap-2">
                    {category?.length > 0 && category.map(item => (
                        <Link href={'/drugCategories/edit/'+item._id} className="bg-gray-200 p-6 rounded-lg text-center group hover:bg-white hover:shadow-2xl hover:shadow-black/25 transition-all">
                            <div className="relative">
                            <Image className="max-h-auto max-h-32 block mx-auto rounded-md" src={item.image} alt={item.name+'image'} width={200} height={200}/>
                            </div>
                            <div className="text-center">
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}