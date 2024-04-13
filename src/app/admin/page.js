"use client";
import AdminDataDisplay from "@/components/layout/AdminDataDisplay/AdminDataDisplay";
import AdminNavbar from "@/components/layout/AdminNavbar/AdminNavbar";
import Link from "next/link";
import Image from "next/image";
import styles from "./Admin.module.css";

export default function AdminPage() {
  return (
    <section className="mt-5 mb-10 flex gap-40">
        <AdminNavbar />
        <AdminDataDisplay />
    </section>
  );
}
