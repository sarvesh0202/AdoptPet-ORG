import React, { useState } from "react";
import { Label } from "../components/ui/labels";
import { Input } from "../components/ui/inputs";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [orgname, setOrgName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [certificate,setCertificate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted with", {

      email,
      password,
      phone,
      certificate,
    });
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/users/signup",
        {
          orgname,
          email,
          password,
          phone,
          address,
          certificate,
          role: "org",
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Get started!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Create your account
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="orgname">Organisation name</Label>
            <Input
              id="orgname"
              placeholder="Michael"
              type="text"
              value={orgname}
              onChange={(e) => setOrgName(e.target.value)} // Two-way binding
            />
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="michael.smith@example.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Two-way binding
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Two-way binding
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            placeholder="0987654991"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Two-way binding
          />
        </LabelInputContainer>
        <LabelInputContainer>
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="Smith"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Two-way binding
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="certificate">Legal certificate</Label>
            <Input
              id="certificate"
              placeholder=""
              type="file"
              value={
                certificate

              }
              onChange={(e) => setCertificate(e.target.value)} // Two-way binding
            />
          </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        <div className="mt-4 text-center">
          <p className="text-neutral-600 dark:text-neutral-300">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 dark:text-blue-400">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};