import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [textColorTwo, setTextColorTwo] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 400) {
        setColor("transparent");
        setTextColor("white");
        setTextColorTwo("white");
      } else {
        setColor("transparent");
        setTextColor("white");
        setTextColorTwo("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top 0 w-full z-[10] ease-in duration-300"
    >
      <div className=" gap-32 cursor-pointer max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link scroll={false} href="#first-section">
          <h1
            style={{ color: `${textColorTwo}` }}
            className="font-bold text-5xl"
          >
            CO² Calculator
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className=" cursor-pointer p-5 text-2xl scroll-smooth">
            <Link scroll={false} href="#second-section">
              To Calculator
            </Link>
          </li>
          <li className="p-5 text-2xl">
            <Link scroll={false} href="#fourth-section">
              About us
            </Link>
          </li>

          <li className="p-5 text-2xl">
            <Link scroll={false} href="#fifth-section">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
