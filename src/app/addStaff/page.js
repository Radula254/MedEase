"use client";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); 
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const requestBody = {
      email,
      password,
      [role]: true, 
    };

    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      setError(true);
      toast.error("An error has occurred. Please try again later.");
    } else {
      setUserCreated(true);
      toast.success("Staff added successfully!");
      window.location.href = "/admin";
    }
    setCreatingUser(false);
  }

  return (
    <section className="my-14">
      <Toaster />
      <h1 className="text-center text-primary text-4xl mb-8">SignUp</h1>
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          disabled={creatingUser}
          onChange={(ev) => setPassword(ev.target.value)}
          className="block w-full mb-4 p-3 border border-gray-300 rounded-lg"
        />
        <div className="mb-6">
          <label className="block mb-2 font-semibold">Select Role</label>
          <div className="flex flex-wrap gap-4">
            {["admin", "doctor", "pharmacist", "nurse", "receptionist", "labTech"].map((roleOption) => (
              <label key={roleOption} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="role"
                  value={roleOption}
                  checked={role === roleOption}
                  onChange={(ev) => setRole(ev.target.value)}
                  className="form-radio h-4 w-4 text-primary focus:ring-primary border-gray-300"
                />
                <span className="capitalize">{roleOption}</span>
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          disabled={creatingUser}
          className="block w-full text-white bg-primary hover:bg-primary-dark font-semibold rounded-lg px-6 py-3"
        >
          Register
        </button>
      </form>
    </section>
  );
}
