"use client";
// import { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  return (
    <div className="background h-screen">
      <p className="text-3xl font-light text text-white ml-10 pt-8">
        GIDISCAPES
      </p>

      <section className="flex flex-col gap-12 pt-8 pb-8 justify-center items-center ml-[40rem] rounded-3xl -mt-12 mr-28 nnedi">
        <p className="text-3xl text-white">Create an Account</p>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">First Name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="First name here"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">Last Name</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="First name here"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">Email Address</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g(psaviour495e@gmail.com)"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">Phone Number</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="08071268043"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">Password</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Password"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
          <div className="flex flex-col gap-2 border-b-[1px]">
            <p className="text-xl text-white">Confirm Password</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Confirm Password"
              required
              className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
            />
          </div>
        </div>
        <button
          className="bg-[#D17D2F] p-3 text-white rounded-xl w-[36rem]"
          onClick={() => router.push("/Home")}
        >
          Sign Up
        </button>
        <p className="text-white">
          Already have an account?{" "}
          <span className="text-[#D17D2F]">
            <a href="">Log in</a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Signup;
