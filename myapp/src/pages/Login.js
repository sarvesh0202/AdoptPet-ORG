"use client";
import React, { useState } from "react";
// import { Label } from "../../components/ui/labels";
// import { Input } from "../../components/ui/inputs";
import { Label } from "../components/ui/labels";
import { Input } from "../components/ui/inputs";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with", { email, password });
    try {
      const res = await axios.post(
        "http://localhost:4000/signin",
        {
          email,
          password,
        }
      );
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome Back
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Log in to your account
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Log in
        </button>

        <div className="mt-4 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 dark:text-blue-400">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};