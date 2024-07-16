"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isPatient, isPharmacist }) {
  const path = usePathname();

  return (
    <div className="flex gap-2 tabs justify-center">
      <Link className={path === "/profile" ? "active" : ""} href={"/profile"}>
        Profile
      </Link>
    </div>
  );
}
