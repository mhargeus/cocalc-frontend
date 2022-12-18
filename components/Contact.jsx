import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen backdrop-opacity-75 bg-fixed bg-center bg-cover custom-img">
      <div className=" absolute top-0 left-0 right-0 bottom-0 z-[0]" />
      <div className=" rounded-xl custom-img-3 bg-cover">
        <div className="p-40 rounded-xl w-full bg-white/40">
          <div className="p-10 bg-white/30 rounded-xl text-black z-[2">
            <h4 className=" text-center text-3xl font-bold mb-5">Contact</h4>
            <div>
              <ul className="text-3xl text-center">
                <li>
                  <span>&#9742;</span> 070-123 45 67
                </li>
                <li> </li>
                <li> </li>
                <li>
                  <span>&#9993;</span> CO2CALC@gmail.com{" "}
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
