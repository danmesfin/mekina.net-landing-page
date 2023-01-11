import React, { useState } from "react";
import Link from "next/link";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Input, InputAdornment } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function index() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex flex-wrap md:flex-nowrap w-full">
      <div className="h-full flex flex-col w-full px-10 md:px-0 md:w-1/2 bg-slate-50">
        <div className="text-red-600 font-extrabold text-4xl mx-auto mt-5 p-3">
          Mekina.net
        </div>
        <div className="flex flex-col text-slate-600 mt-20 mx-auto justify-center">
          <h2 className="font-semibold text-3xl mx-auto">Welcome!</h2>
          <h5 className="text-sm mt-4 mx-auto">
            Sign in by entering the information below
          </h5>
        </div>
        <div className="flex flex-col w-full md:px-24 mx-auto mt-10">
          <form className="flex flex-col md:mx-10">
            <TextField
              sx={{ m: 2 }}
              id="standard-basic"
              label="Email Address"
              variant="standard"
            />
            <FormControl sx={{ m: 2 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <div className="flex  mt-1 mx-2 justify-between text-slate-700">
              <div className="flex mx-2">
                <input
                  id="r-me-checkbox"
                  name="remenber-me"
                  type="checkbox"
                  value="Remeber-me"
                  placeholder="Remember me"
                  className="mr-1"
                />
                <label htmlFor="r-me-checkbox">Remember me</label>
              </div>
              <div className="flex mx-2">
                <Link href="/reset-password" className="hover:text-blue-500">
                  Forget Password
                </Link>
              </div>
            </div>
            <button className="mt-5 mx-2 py-2 bg-red-600 hover:bg-red-700">
              Continue
            </button>
          </form>
          <div className="text-md text-slate-700 mt-1 mx-auto">
            Don&apos;t have an account ?{" "}
            <a className="text-blue-600 hover:text-underline" href="#">
              Create one here
            </a>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col w-full md:w-1/2 bg-red-300 invisible md:visible">
        <img
          src="/imagecar.jpg"
          alt="car-image"
          className="fixed h-full object-fit"
        />
      </div>
    </div>
  );
}

export default index;
