"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  console.log(session)
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }

  return (
    <header className={styles.header}>
      <Link href="/"><Image src={'/logo7.jpg'} className={styles.logo} width="90" height="90" alt="Logo"/></Link>


      {status === 'unauthenticated' && (
        <nav className={styles.navbar}>
        <li className={styles.navbarLi}><Link href={'/'} className={styles.navbarLiLink}>Home</Link></li>
        <li className={styles.navbarLi}><Link href={'/services'} className={styles.navbarLiLink}>Services</Link></li>
        <li className={styles.navbarLi}><Link href={'/about'} className={styles.navbarLiLink}>About</Link></li>
      </nav>
      )}
      {status === 'authenticated' && (
        <nav className={styles.navbarr}>
        <li className={styles.navbarLi}><Link href={'/'} className={styles.navbarLiLink}>Home</Link></li>
        <li className={styles.navbarLi}><Link href={'/services'} className={styles.navbarLiLink}>Services</Link></li>
        <li className={styles.navbarLi}><Link href={'/about'} className={styles.navbarLiLink}>About</Link></li>
        <li className={styles.navbarLi}><Link href={'/appoinntment'} className={styles.navbarLiLink}>Appointment</Link></li>
      </nav>
      )}
      <nav className={styles.navbar}>
        {status === 'authenticated' && (
          <>
           <li className={styles.navbarLi}><Link href={'/profile'} className={styles.navbarLiLink}>Welcome, {userName}</Link></li>
          <li className={styles.navbarLi}><button onClick={() => signOut()} className={styles.navbarLiLink}>Logout</button></li>
          </>
        )}
        {status === 'unauthenticated' && (
          <>
          <li className={styles.navbarLi}><Link href={'/login'} className={styles.navbarLiLink}>Login</Link></li>
          <li className={styles.navbarLi}><Link href={'/signup'} className={styles.navbarLiLink}>SignUp</Link></li>
          </>
        )}
      </nav>
    </header>
  );
}
