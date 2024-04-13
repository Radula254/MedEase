"use client";
import Image from "next/image";
import styles from "./Banner.module.css";

export default function Banner() {
    return(
        <section className={styles.banner}>
        <h4>MedEase Run </h4>
        <h2>Help us <span> SAVE A CHILD</span> - Free t-shirts & many rewards</h2>
        <button className={styles.button}>Explore More</button>
    </section>
    );
}