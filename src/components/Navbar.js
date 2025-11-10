import React from "react";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation()
  if(location.pathname.startsWith('/car/')){
    return null;
  }
  return (
 <div className="bg-background pb-5">
     <div className=" mx-auto sm:w-[800px] max-h-10 flex w-11/12  rounded-b-xl bg-main border-border border border-t-0 shadow-md p-2  justify-between items-center">
      <div className="container sm:flex hidden pr-2 border-r w-fit border-border">
        <h1 className="text-2xl font-bold text-text">Cars and whatnot</h1>
      </div>
      <div className="flex justify-center gap-10 flex-1 mx-10 text-text text-xl">
        <Link to="/about" className="hover:bg-accent p-1 rounded cursor-pointer transition-all">About</Link>
        <Link to="/contact" className="hover:bg-accent p-1 rounded cursor-pointer transition-all">Contact</Link>
        <Link to="/" className="hover:bg-accent p-1 rounded cursor-pointer transition-all">Home</Link>
      </div>
    </div>
 </div>
  );
}
