import React from "react";
import Link from "next/link";
import CalcButton from "./CalcButton";

const Alpha = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img ">
      {/* Overlay */}
      <div className="z-1+ absolute top-0 left-0 right-0 bottom-0  z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem]">
        <h2 className="text-5xl font-bold mb-5">
          CO² calculator - measure your impact on our world
        </h2>
        <CalcButton />
      </div>
    </div>
  );
};

export default Alpha;
