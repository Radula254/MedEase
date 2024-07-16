"use client";
import Image from "next/image";
import styles from "./Partners.module.css";

export default function Partners() {
    return (
        <section className={styles.partners}>
            <h2>MedEase Partners</h2>
            <p>Some of our Partnered Companies</p><br />
            <div className={styles.ptContainer}>
                <div className={styles.partner}>
                    <Image src={"/partner.avif"} width="228" height="152" alt="partner" />
                    <div className={styles.des}>
                        <span>HealthTech Innovations</span>
                        <h5>Advanced Medical Solutions</h5>
                        <h4>AMS</h4>
                    </div>
                </div>
                <div className={styles.partner}>
                    <Image src={"/partner.avif"} width="228" height="152" alt="partner" />
                    <div className={styles.des}>
                        <span>LifeCare Systems</span>
                        <h5>Comprehensive Healthcare Providers</h5>
                        <h4>CHP</h4>
                    </div>
                </div>
                <div className={styles.partner}>
                    <Image src={"/partner.avif"} width="228" height="152" alt="partner" />
                    <div className={styles.des}>
                        <span>MedEquip Supplies</span>
                        <h5>Quality Medical Equipment</h5>
                        <h4>QME</h4>
                    </div>
                </div>
                <div className={styles.partner}>
                    <Image src={"/partner.avif"} width="228" height="152" alt="partner" />
                    <div className={styles.des}>
                        <span>Wellness Tech</span>
                        <h5>Innovative Health Solutions</h5>
                        <h4>IHS</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}
