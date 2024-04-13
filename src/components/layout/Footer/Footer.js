"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <Image
          src={"/logo7.jpg"}
          className={styles.logo}
          width="40"
          height="40"
          alt="Logo"
        />
        <h4>Contact</h4>
        <p>
          <strong>Address: </strong>489 Kitusuri Road, Street 77, Nairobi
        </p>
        <p>
          <strong>Phone: </strong> +254 797 093 831 /(020) 01 1436 1483
        </p>
        <p>
          <strong>Hours: </strong> 24/7, Including Holidays
        </p>
        <Link href="index.html" className={styles.links}>Home</Link>
        <Link href="index.html" className={styles.links}>Services</Link>
        <Link href="index.html" className={styles.links}>About</Link>
      </div>
    </section>
  );
}
