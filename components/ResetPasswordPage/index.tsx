import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TextField from "@mui/material/TextField";

function index() {
  return (
    <div className="h-screen flex flex-wrap md:flex-nowrap w-full">
      <div className="h-full flex flex-col w-full px-10 md:px-0 md:w-1/2 bg-slate-50">
        <div className="text-red-600 font-extrabold text-4xl mx-auto mt-5 p-3">
          Mekina.net
        </div>
        <div className="flex flex-col text-slate-600 mt-20 mx-auto justify-center">
          <h2 className="font-semibold text-3xl mx-auto">Forget Password!</h2>
          <h5 className="text-sm mt-4 mx-auto">
            We have sent you one time code for sign in - expires in 2 minutes!
          </h5>
        </div>
        <div className="flex flex-col w-full md:px-24 mx-auto mt-10">
          <form className="flex flex-col md:mx-10">
            <TextField
              sx={{ m: 2 }}
              id="standard-basic"
              label="Enter code"
              variant="standard"
            />

            <button className="mt-5 mx-2 py-2 bg-red-600 hover:bg-red-700">
              Verify
            </button>
          </form>
          <div className="text-md text-slate-700 mt-1 mx-auto">
            Have an account ?{" "}
            <Link className="text-blue-600 hover:text-underline" href="/">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full md:w-1/2 bg-red-300 invisible md:visible">
        <img
          src="/car.jpg"
          alt="car-image"
          className="fixed h-full object-fill"
        />
      </div>
    </div>
  );
}

export default index;
