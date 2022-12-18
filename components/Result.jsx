import { useState, useEffect } from "react";
import React from "react";

const Result = ({ result }) => {
  const [input, setInput] = useState(0);

  const cheese1 = "If you would eat CO2 in the form of cheese, you would get";
  const cheese2 = (result / 11).toFixed(2) + " grams of cheese";
  const cheese3 = " ";
  const cheeseHeadline = "How much Cheese?";
  const cheesePic =
    "https://images.unsplash.com/photo-1592790064984-b715a1040f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

  const travelTrain1 = "If you were to travel by train, you would get";
  const travelTrain2 = (result * 256).toFixed(0) + " km";
  const travelTrain3 =
    " with a train driven by energy from renewable sources. As references the earth meassured around the equator is 40 075 km long. ";
  const trainHeadline = "How far would you get by train?";
  const trainPic =
    "https://images.unsplash.com/photo-1503776470087-3569342b4a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60";

  const carbonNumber1 = "The emission for your trip is ";
  const carbonNumber2 = (result / 1000).toFixed(2) + " kg of CO2";
  const carbonNumber3 = "";
  const carbonHeadline = "How much CO2?";
  const carbonPic =
    "https://images.unsplash.com/photo-1635604553688-d9640263bd9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80";
  const cardPresenting = (headline, info1, info2, info3, imgLink) => {
    return (
      <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img class="rounded-t-lg" src={imgLink} alt="" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {headline}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {info1} <div className="text-xl text-white">{info2}</div> {info3}
          </p>
        </div>
      </div>
    );
  };

  /// Card-design from https://flowbite.com/docs/components/card/

  return (
    <div className="pt-20 w-screen h-full backdrop-opacity-75 bg-fixed bg-center bg-cover custom-img">
      <div className="rounded-xl  text-center text-white shadow-2xl custom-img-4 bg-cover bg-center">
        <div className="rounded-xl  p-10 pl-[25rem] pr-[25rem] text-white shadow-2xl bg-black/70 bg-cover bg-center  ">
          <h1 className="text-5xl  font-bold mb-5">Result</h1>

          <div className="flex items-center h-full justify-center gap-4 ">
            <div>
              {cardPresenting(
                carbonHeadline,
                carbonNumber1,
                carbonNumber2,
                carbonNumber3,
                carbonPic
              )}
              {/* {distance} */}
            </div>
            <div>
              {cardPresenting(
                cheeseHeadline,
                cheese1,
                cheese2,
                cheese3,
                cheesePic
              )}
              {/* //Present in food terms */}
            </div>
            <div>
              {cardPresenting(
                trainHeadline,
                travelTrain1,
                travelTrain2,
                travelTrain3,
                trainPic
              )}
              {/* Present in travel terms */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
