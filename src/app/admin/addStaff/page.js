"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddStaffPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        resolve();
      } else {
        reject();
      }
    });

    await toast.promise(savingPromise, {
      loading: "Creating user...",
      success: "User created!",
      error: "Could not create user",
    });
    
    setCreatingUser(false);
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl">Add Staff</h1>
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
        <button
          type="submit"
          disabled={creatingUser}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Register
        </button>
      </form>
    </section>
  );
}
