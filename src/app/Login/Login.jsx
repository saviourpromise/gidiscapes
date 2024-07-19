"use client";
// import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  return (
    <div className="background h-screen">
      <p className="text-3xl font-light text text-white ml-10 pt-8">
        GIDISCAPES
      </p>

      <section className="flex flex-col gap-12 pt-8 pb-8 justify-center ml-[40rem] pl-8 pr-8 rounded-3xl -mt-10 mr-28 nnedi">
        <p className="text-3xl text-white text-center pb-4">Welcome Back</p>
        <div className="flex flex-col gap-2 border-b-[1px]">
          <p className="text-xl text-white">Email Address</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="e.g(psaviour495@gmail.com)"
            required
            className="bg-inherit text-white placeholder:text-white placeholder:text-sm placeholder:font-light"
          />
        </div>

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
        <div className="flex gap-[15.5rem] -mt-6 pb-8">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="w-5 accent-current"
            />
            <p className="text-white">Keep me logged in</p>
          </div>
          <p className="text-white">
            <a href="">Forget Password?</a>
          </p>
        </div>
        <button
          className="bg-[#D17D2F] p-3 text-white rounded-xl w-[34rem]"
          onClick={() => router.push("/Home")}
        >
          Sign Up
        </button>
        <p className="text-white text-center">
          Don&apos;t have an account?{" "}
          <span className="text-[#D17D2F]">
            <a href="">Create an Account</a>
          </span>
        </p>
      </section>
    </div>
  );
};

export default Login;
