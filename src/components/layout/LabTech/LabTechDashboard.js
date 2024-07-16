"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./LabTechDashboard.module.css";

export default function LabTechDashboard() {
    return(
        <section className={styles.content}>
            <div className={styles.dataSection}>
                <div className={styles.dataCard}>
                    <Link href={'/appointments/labTech'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Consult</h3>
                </div>
            </div>
        </section>
    )
}