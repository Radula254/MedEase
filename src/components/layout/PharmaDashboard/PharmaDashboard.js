"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./PharmaDashboard.module.css";

export default function PharmaDashboard() {
    return(
        <section className={styles.content}>
            <div className={styles.dataSection}>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Dispense Drugs</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>View Patients Prescriptions Data</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugCategories/new'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Add Drug Category</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugs/new'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Add Drug</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugCategories'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>View Drug Categories</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugs'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>View Drugs</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugCategories'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Edit Drug Categories</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugs'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Edit Drugs</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugs'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Edit 2 Drugs</h3>
                </div>
            </div>
        </section>
    )
}