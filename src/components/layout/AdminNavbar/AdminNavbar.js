"use client";
import Link from "next/link";
import styles from "./AdminNavbar.module.css";

export default function AdminNavbar() {
  return (
    <section className={styles.container}>
      <aside className={styles.sideMenu}>
        <div className={styles.brandName}>
          <h1>Admin Panel</h1>
        </div>
        <ul className={styles.roleList}>
          <li>
            <Link href={"/"} className={styles.Link}>
              Admin
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.Link}>
              Manager
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.Link}>
              Doctor
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.Link}>
              Nurse
            </Link>
          </li>
          <li>
            <Link href={"/"} className={styles.Link}>
              Receptionist
            </Link>
          </li>
        </ul>
      </aside>
    </section>
  );
}
