import { useState, useEffect } from "react";
import React from "react";

const Result = () => {
  const [result, setResult] = useState("");
  const [input, setInput] = useState(0);

  const cheese =
    "If you would eat the same eqvivalent of cheese as you drove in c02e, it would be " +
    { input } * +"cheese";
  const cheeseHeadline = "How much Cheese?";

  const travelTrain =
    "If you would eat the same eqvivalent of cheese as you drove in c02e, it would be " +
    { input } * +"cheese";
  const trainHeadline = "How much Cheese?";

  const cardPresenting = (headline, info) => {
    const imgLink =
      "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

    return (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
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
            {info}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-52 h-screen w-screen  backdrop-opacity-75 bg-fixed bg-center bg-cover custom-img">
      <div className="rounded-xl text-center text-white shadow-2xl custom-img-4 bg-cover bg-center">
        <div className="rounded-xl  p-10 pl-[25rem] pr-[25rem] text-white shadow-2xl bg-black/70 bg-cover bg-center  ">
          <h1 className="text-5xl font-bold mb-5">Result</h1>

          <div className="flex items-center justify-center">
            <div>
              {cardPresenting()}
              {/* {distance} */}
            </div>
            <div>
              {cardPresenting(cheeseHeadline, cheese)}
              {/* //Present in food terms */}
            </div>
            <div>
              {cardPresenting(trainHeadline, travelTrain)}
              {/* Present in travel terms */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
