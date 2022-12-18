import React from "react";

const Info = () => {
  return (
    <div className="flex items-center justify-center h-screen backdrop-opacity-75 bg-fixed bg-center bg-cover custom-img">
      <div className=" absolute top-0 left-0 right-0 bottom-0 z-[0]" />
      <div className=" p-20 rounded-xl bg-white/30">
        <div className=" p-20 rounded-xl bg-black/70">
          <div className="p-5 text-white z-[2">
            <h2 className="text-5xl font-bold mb-5">About us</h2>
            <p>
              What is CO2?<br></br>
              Carbon dioxide (CO2) is a greenhouse gas that is produced when
              fossil fuels such as coal, oil, and natural gas are burned. It is
              also produced when forests and other vegetation are burned or when
              land is cleared for agriculture or other purposes.
            </p>
            <br />
            <p>
              {" "}
              CO2 absorbs and traps heat in the Earth's atmosphere, which can
              contribute to the warming of the planet. This process is known as
              the greenhouse effect. As the levels of CO2 in the atmosphere
              increase, more heat is trapped, leading to an increase in the
              Earth's temperature.
            </p>
            <br></br>
            <p>
              {" "}
              The burning of fossil fuels and other human activities are the
              main sources of CO2 emissions, and these emissions have been
              increasing over time. This increase in CO2 emissions is a major
              contributor to climate change, which is the long-term warming of
              the planet.
            </p>
            <div>
              <br></br>
              <p>
                Our goal is to spread awareness about the impact of CO2 on our
                planet and help people reduce their CO2 emissions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
