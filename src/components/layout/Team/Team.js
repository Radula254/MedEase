"use client";
import Image from "next/image";
import styles from "./Team.module.css";

export default function Team() {
    return(
        <section className={styles.team}>
        <h2>MedEase Managers</h2>
        <p>Some of our Department Managers</p><br />
        <div className={styles.mgContainer}>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>James Doe</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep2.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Mia Powell</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep3.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Rachel Griffin</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep4.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Deborah Lee</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep5.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Davina Chang</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep6.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Emmanuel Masawe</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep7.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Clinton Kileo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep8.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Lynel Kate</h4>
                </div>
            </div>
        </div>
    </section>
    );
}