"use client";
import Link from 'next/link';
import styles from "./Banner.module.css";

export default function Banner() {
    return (
        <section className={styles.banner}>
            <h4>MedEase</h4>
            <h2>Know us <span> AND MAKE MEDICATION EASY</span></h2>
            <Link href="/about" passHref>
                <button type="button" className={styles.button}>Explore More</button>
            </Link>
        </section>
    );
}
