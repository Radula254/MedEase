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
                    <h3>Admins</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/doctorDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Doctors</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/pharmacistDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Pharmacists</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/labTechDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Lab Technicians</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/nurseDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Nurses</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/receptionistDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Receptionists</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/staffDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>All Staff Members</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/allStaffDisplay/patientsDisplay'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>Patients</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugCategories'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>View Drug Categories</h3>
                </div>
                <div className={styles.dataCard}>
                    <Link href={'/drugs'} className={styles.Link}><Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image}  alt="Data Display Picture"/></Link>
                    <h3>View Drugs</h3>
                </div>
            </div>
        </section>
    )
}