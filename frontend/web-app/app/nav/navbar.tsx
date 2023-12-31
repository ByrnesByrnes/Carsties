import React from "react";
import Search from "./search";
import Logo from "./logo";

const Navbar = () => (
  <header className="sticky top-0 z-50 flex justify-between bg-white p-5 items-center text-gray-800 shadow-md">
    <Logo />
    <Search />
    <div>
      Login
    </div>
  </header>
);


export default Navbar;