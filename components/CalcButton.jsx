import React from "react";
import Link from "next/link";

{
  /* <Link href="/" to="second-section" spy={true} smooth={true} offset={50} duration={500}><button className='px-8 py-2 border'>Calculate</button></Link> */
}

const CalcButton = () => {
  return (
    <div>
      <Link scroll={false} href="#second-section">
        <button className="px-8 py-2 border">To Calculator</button>
      </Link>
    </div>
  );
};

export default CalcButton;
