"use client";
import Image from "next/image";
import styles from "./Partners.module.css";

export default function Partners() {
    return(
        <section className={styles.partners}>
        <h2>MedEase Partners</h2>
        <p>Some of our Partnered Companies</p><br />
        <div className={styles.ptContainer}>
            <div className={styles.partner}>
                <Image src={"/partner.avif"}  width="228" height="152"  alt="partner"  />
                <div className={styles.des}>
                    <span>HealthTech Solutions</span>
                    <h5>Medical Equipment and Technology Providers</h5>
                    <h4>METP</h4>
                </div>
            </div>
            <div className={styles.partner}>
                <Image src={"/partner.avif"}  width="228" height="152"  alt="partner"  />
                <div className={styles.des}>
                    <span>HealthTech Solutions</span>
                    <h5>Medical Equipment and Technology Providers</h5>
                    <h4>METP</h4>
                </div>
            </div>
            <div className={styles.partner}>
                <Image src={"/partner.avif"}  width="228" height="152"  alt="partner"  />
                <div className={styles.des}>
                    <span>HealthTech Solutions</span>
                    <h5>Medical Equipment and Technology Providers</h5>
                    <h4>METP</h4>
                </div>
            </div>
            <div className={styles.partner}>
                <Image src={"/partner.avif"}  width="228" height="152"  alt="partner"  />
                <div className={styles.des}>
                    <span>HealthTech Solutions</span>
                    <h5>Medical Equipment and Technology Providers</h5>
                    <h4>METP</h4>
                </div>
            </div>
        </div>
    </section>
    );
}