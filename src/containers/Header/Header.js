import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full p-4 bg-cyan-400">
      <h2 className="m-0">LOGO</h2>
      <div className="flex items-center">
        <Link className="mx-2 text-white font-normal" to={"/"}>
          Home
        </Link>
        <Link className="mx-2 text-white font-normal" to={"/table"}>
          Table
        </Link>
        <Link className="mx-2 text-white font-normal" to={"/register"}>
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
