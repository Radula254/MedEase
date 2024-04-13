"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./AdminDataDisplay.module.css";

export default function AdminDataDisplay() {
    return(
        <section className={styles.content}>
            <div className={styles.brandName}>
                <h1>Data Display</h1>
            </div>
            <div className={styles.dataSection}>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
            </div>
        </section>
    )
}