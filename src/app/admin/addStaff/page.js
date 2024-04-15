"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);
  const [doctor, setDoctor] = useState(false);
  const [pharmacist, setPharmacist] = useState(false);
  const [nurse, setNurse] = useState(false);
  const [receptionist, setReceptionist] = useState(false);
  const [labTech, setLabTech] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password, admin, doctor, pharmacist, nurse, receptionist, labTech }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      setError(true);
    }
    else {
      setUserCreated(true);
    }
    setCreatingUser(false);
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl">SignUp</h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.
          <br />
          Now you can{" "}
          <Link className="underline" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occured.
          <br />
          Please try again later
        </div>
      )}
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <div>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
              <input
                id="adminCb" type="checkbox" className="" value={'1'}
                checked={admin}
                onChange={(ev) => setAdmin(ev.target.checked)}
              />
              <span>Admin</span>
            </label>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="doctorCb">
              <input
                id="doctorCb" type="checkbox" className="" value={'1'}
                checked={doctor}
                onChange={(ev) => setDoctor(ev.target.checked)}
              />
              <span>Doctor</span>
            </label>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="pharmacistCb">
              <input
                id="pharmacistCb" type="checkbox" className="" value={'1'}
                checked={pharmacist}
                onChange={(ev) => setPharmacist(ev.target.checked)}
              />
              <span>Pharmacist</span>
            </label>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="nurseCb">
              <input
                id="nurseCb" type="checkbox" className="" value={'1'}
                checked={nurse}
                onChange={(ev) => setNurse(ev.target.checked)}
              />
              <span>Nurse</span>
            </label>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="receptionistCb">
              <input
                id="receptionistCb" type="checkbox" className="" value={'1'}
                checked={receptionist}
                onChange={(ev) => setReceptionist(ev.target.checked)}
              />
              <span>Receptionist</span>
            </label>
            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="labTechCb">
              <input
                id="labTechCb" type="checkbox" className="" value={'1'}
                checked={labTech}
                onChange={(ev) => setLabTech(ev.target.checked)}
              />
              <span>LabTech</span>
            </label>
          </div>
        <button
          type="submit"
          disabled={creatingUser}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          SignUp
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Already have an account?{" "}
            <Link className="underline" href={"/login"}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}
