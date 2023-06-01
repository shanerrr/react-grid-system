"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const formHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = event.target as any;

    if (username.value !== "shane" || password.value !== "test") {
      return setError("Incorrect Details");
    }

    localStorage.setItem("account", "Shane");
    return router.push("/");
  };

  return (
    <main className="container mx-auto flex justify-center items-center h-screen">
      <form
        className="bg-slate-300 py-16 px-8 flex flex-col gap-4 w-1/3 rounded-2xl"
        onSubmit={formHandler}
      >
        <input
          name="username"
          placeholder="username"
          type="text"
          className="h-12 w-full rounded-xl px-4"
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          autoComplete="current-password"
          className="h-12 w-full rounded-xl px-4"
        />
        <button
          type="submit"
          className="bg-slate-700 py-2 rounded-xl text-white"
        >
          LOGIN
        </button>
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </main>
  );
}
