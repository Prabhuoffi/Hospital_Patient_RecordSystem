import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Topnav() {
  const [show, setShow] = useState(false);

  return (
    <header>
      <div className="w-screen fixed flex items-center bg-[#FAFAFA] justify-center px-2 top-0 z-20">
        <nav className="container flex items-start py-4 mt-4 sm:mt-12 backdrop-blur-md relative">
          <div className="relative">
            <h1 className="text-blue-500 font-bold text-2xl">
              Hospital Records
            </h1>
          </div>
          <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-slate-900 uppercase text-base font-medium md:py-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/record">Records</Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
              >
                Login
              </Link>
            </li>
          </ul>
          {show && (
            <ul className="navigation sm:flex flex-1 md:hidden justify-end items-center gap-12 text-slate-900 uppercase text-xs md:py-1">
              <li>
                <Link to="/" onClick={() => setShow(!show)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/record" onClick={() => setShow(!show)}>
                  Record
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  onClick={() => setShow(!show)}
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
                >
                  Login
                </Link>
              </li>{" "}
            </ul>
          )}
          <div
            className="flex sm:hidden flex-1 justify-end z-40"
            onClick={() => setShow(!show)}
          >
            <FontAwesomeIcon
              className="text-2xl"
              icon={show ? faTimes : faBars}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Topnav;
