"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    setErrorMessage("");

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      setLoginInProgress(false);
      return;
    }

    const result = await signIn('credentials', { redirect: false, email, password });

    setLoginInProgress(false);

    if (result.ok) {
      window.location.href = '/profile';
    } else {
      setErrorMessage(result.error || "Invalid login credentials.");
    }
  }

  return (
    <section className="my-14">
      <h1 className="text-center text-primary text-4xl">Login</h1>
      <form className="block max-w-xl mx-auto" onSubmit={handleFormSubmit}>
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          disabled={loginInProgress}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          disabled={loginInProgress}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button
          type="submit"
          disabled={loginInProgress}
          className="block w-full text-gray-700 font-semibold border border-gray-300 rounded-xl px-6 py-2"
        >
          Login
        </button>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
            Don't have an account?{" "}
            <Link className="underline" href={"/signup"}>Sign up here &raquo;</Link>
        </div>
      </form>
    </section>
  );
}
