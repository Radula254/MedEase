"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AdminDataDisplay.module.css";
import BarChart from "@/components/BarChart";

export default function AdminDataDisplay() {
  const [staffData, setStaffData] = useState({
    doctors: 0,
    nurses: 0,
    receptionists: 0,
    labTechs: 0,
    pharmacists: 0,
  });

  useEffect(() => {
    const fetchStaffData = async () => {
      const response = await fetch("/api/allStaff");
      const data = await response.json();
      
      const staffCounts = data.reduce((counts, user) => {
        if (user.doctor) counts.doctors += 1;
        if (user.nurse) counts.nurses += 1;
        if (user.receptionist) counts.receptionists += 1;
        if (user.labTech) counts.labTechs += 1;
        if (user.pharmacist) counts.pharmacists += 1;
        return counts;
      }, { doctors: 0, nurses: 0, receptionists: 0, labTechs: 0, pharmacists: 0 });

      setStaffData(staffCounts);
    };

    fetchStaffData();
  }, []);

  const staffCountData = [
    staffData.doctors,
    staffData.nurses,
    staffData.receptionists,
    staffData.labTechs,
    staffData.pharmacists,
  ];

  return (
    <section className={styles.content}>
      <div className={styles.brandName}>
        <h1>Data Display</h1>
      </div>
      <div className={styles.graphSection}>
        <h2>Staff Distribution</h2>
        <BarChart data={staffCountData} />
      </div>
      <div className={styles.dataSection}>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/doctorDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Doctors</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/pharmacistDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Pharmacists</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/labTechDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Lab Technicians</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/nurseDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Nurses</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/receptionistDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Receptionists</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/staffDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>All Staff Members</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/patientsDisplay'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Patients</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/allStaffDisplay/staffPieChart'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>Staff Distribution Pie</h3>
        </div>
        {/* <div className={styles.dataCard}>
          <Link href={'/drugCategories'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>View Drug Categories</h3>
        </div>
        <div className={styles.dataCard}>
          <Link href={'/drugs'} className={styles.Link}>
            <Image src={'/DataDisplay.png'} width={100} height={100} className={styles.image} alt="Data Display Picture" />
          </Link>
          <h3>View Drugs</h3>
        </div> */}
      </div>
    </section>
  );
}
