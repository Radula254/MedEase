"use client";
import Right from "@/components/icons/Right";
import { useProfile } from "@/components/UseProfile";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DrugsPage() {
  const [drugs, setDrugs] = useState([]);
  const { loading, data } = useProfile();

  const isPharmacist = data.pharmacist;

  useEffect(() => {
    fetch("/api/drugs").then((res) => {
      res.json().then((drugs) => {
        setDrugs(drugs);
      });
    });
  }, []);

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
    <section className="mt-10 mb-24 max-w-2xl mx-auto">
      {isPharmacist && (
        <div className="mt-8">
          <Link href={"/drugs/new"} className="button flex">
            <span>Create new drug item</span>
            <Right />
          </Link>
        </div>
      )}
      <div>
      <h2 className="text-sm text-gray-400 mt-8">Edit drug</h2>
        <div className="grid grid-cols-3 gap-2">
          {drugs?.length > 0 &&
            drugs.map((drug) => (
              <Link
                href={"/drugs/edit/" + drug._id}
                className="bg-gray-200 rounded-lg p-4"
              >
                <div>
                  <Image
                    className="rounded-md"
                    src={drug.image}
                    alt={"drug image"}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-center">{drug.name}</div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
