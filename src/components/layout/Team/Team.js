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
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
            <div className={styles.manager}>
                <Image src={'/dep1.jpg'} width="228" height="152"  alt="manager1" />
                <div className={styles.des}>
                    <span>Neurologist</span>
                    <h5>Manager Of Neurology</h5>
                    <h4>Cristiano Ronaldo</h4>
                </div>
            </div>
        </div>
    </section>
    );
}