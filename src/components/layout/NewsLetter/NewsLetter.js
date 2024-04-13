"use client";
import Image from "next/image";
import styles from "./NewsLetter.module.css";

export default function NewsLetter() {
  return (
    <section className={styles.newsletter}>
      <div className={styles.newsText}>
        <h4>Sign Up For Newsletters</h4>
        <p>
          Get E-mail updates on Health Promotion and{" "}
          <span>Disease Awareness</span>
        </p>
      </div>
      <div className={styles.newsForm}>
        <input type="text" placeholder="Your email address" />
        <button className={styles.button}>Sign Up</button>
      </div>
    </section>
  );
}
