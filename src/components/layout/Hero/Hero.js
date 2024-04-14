"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>MEDEASE HOSPITALS</h1>
      <br />
      <h4>
        Hospital-For-<span>ALL</span>
      </h4>
      <h2>Modern machine equipment</h2>
      <h1>For modern day problems</h1>
      <br />
      <p>Health is wealth which is priceless!!</p>
      <br />
      <button className={styles.button}>Heal Here</button>
    </section>
  );
}
