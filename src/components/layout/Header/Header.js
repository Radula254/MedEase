"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Header() {
  const session = useSession();
  const status = session?.status;
  const [isPatient, setIsPatient] = useState(false);
  const [isPharmacist, setIsPharmacist] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);
  const [isNurse, setIsNurse] = useState(false);
  const [isLabTech, setIsLabTech] = useState(false);
  const [isReceptionist, setIsReceptionist] = useState(false);
  const [userId, setUserId] = useState(null);
  const userData = session.data?.user;
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(' ')) {
    userName = userName.split(' ')[0];
  }

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/profile").then((response) => {
        response.json().then((data) => {
          if (data.pharmacist === true) {
            setIsPharmacist(true);
          } else if (data.admin === true) {
            setIsAdmin(true);
          } else if (data.doctor === true) {
            setIsDoctor(true);
          } else if (data.nurse === true) {
            setIsNurse(true);
          } else if (data.labTech === true) {
            setIsLabTech(true);
          } else if (data.receptionist === true) {
            setIsReceptionist(true);
          } else {
            setIsPatient(true);
          }
          setUserId(data._id);
        });
      });
    }
  }, [session, status]);

  useEffect(() => {}, []);

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={"/logo7.jpg"} className={styles.logo} width="90" height="90" alt="Logo" />
      </Link>

      {status === "unauthenticated" && (
        <nav className={styles.navbar}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isPatient && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={`/appointments/patient/${userId}`} className={styles.navbarLiLink}>
              Book Appointment
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isAdmin && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/admin"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isPharmacist && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/staffDashBoard/pharmacist"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isDoctor && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/staffDashBoard/doctor"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isNurse && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/staffDashBoard/nurse"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isLabTech && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/staffDashBoard/labTech"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      {status === "authenticated" && isReceptionist && (
        <nav className={styles.navbarr}>
          <li className={styles.navbarLi}>
            <Link href={"/"} className={styles.navbarLiLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/about"} className={styles.navbarLiLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarLi}>
            <Link href={"/staffDashBoard/receptionist"} className={styles.navbarLiLink}>
              DashBoard
            </Link>
          </li>
        </nav>
      )}
      <nav className={styles.navbar}>
        {status === "authenticated" && isAdmin && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/admin"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isDoctor && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/doctor"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isPatient && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/patient"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isLabTech && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/labTech"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isNurse && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/nurse"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isReceptionist && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/receptionist"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "authenticated" && isPharmacist && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/profiles/receptionist"} className={styles.navbarLiLink}>
                Welcome {userName}
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className={styles.navbarLiLink}
              >
                Logout
              </button>
            </li>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <li className={styles.navbarLi}>
              <Link href={"/login"} className={styles.navbarLiLink}>
                Login
              </Link>
            </li>
            <li className={styles.navbarLi}>
              <Link href={"/signup"} className={styles.navbarLiLink}>
                SignUp
              </Link>
            </li>
          </>
        )}
      </nav>
    </header>
  );
}
