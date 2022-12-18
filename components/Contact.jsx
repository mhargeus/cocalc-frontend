import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen backdrop-opacity-75 bg-fixed bg-center bg-cover custom-img">
      <div className=" absolute top-0 left-0 right-0 bottom-0 z-[0]" />
      <div className=" p-20 rounded-xl bg-white/60">
        <div className="p-5 text-black z-[2">
          <h2 className="text-5xl font-bold mb-5">Contact</h2>
          <div>
            <li>Phone: 070-123 45 67</li>
            <li>Email: c02calc@gmail.com </li>
            <li>
              Address: Krokslätts Fabriker 12A,
              <br />
              431 37 Mölndal
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
