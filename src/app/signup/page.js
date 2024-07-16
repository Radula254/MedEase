"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*?><:;+_,-]).{8,}$/;
    return regex.test(password);
  }

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError("");
    setUserCreated(false);
    setPasswordError("");

    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%&*?><:;+_-,).");
      setCreatingUser(false);
      return;
    }

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setError("An error has occurred. Please try again later.");
    } else {
      setUserCreated(true);
      window.location.href = '/login';
    }
    setCreatingUser(false);
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl">SignUp</h1>
      {error && (
        <div className="my-4 text-center text-red-500">
          {error}
        </div>
      )}
      {passwordError && (
        <div className="my-4 text-center text-red-500">
          {passwordError}
        </div>
      )}
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
          className="block w-full text-gray-700 border border-gray-300 rounded-xl px-6 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
          className="block w-full text-gray-700 border border-gray-300 rounded-xl px-6 py-2 mb-4"
        />
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
