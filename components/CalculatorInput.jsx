import Link from "next/link";
import React, { useState, useEffect, use } from "react";

const CalculatorInput = ({ passingCarsDown, setResult }) => {
  const [display, setDisplay] = useState(false);
  const [carArray, setCarArray] = useState(passingCarsDown);
  const [search, setSearch] = useState("");
  const [chosenCar, setChosenCar] = useState(null);
  const [distance, setDistance] = useState("");
  const [automaticInput, setAutomaticInput] = useState(true);

  const [manualConsumption, setManualConsumption] = useState(0);
  const [manualDistance, setManualDistance] = useState(0);

  const [manualResult, setManualResult] = useState(0);
  const [automaticResult, setAutomaticResult] = useState(0);

  useEffect(() => {
    setManualResult((manualConsumption / 100) * 2350 * manualDistance);
  }, [manualConsumption, manualDistance]);

  useEffect(() => {
    if (chosenCar !== null) {
      setAutomaticResult(chosenCar.wltp * distance);
    }
  }, [chosenCar, distance]);

  const distanceChangeHandler = (e) => {
    setDistance(e.target.value);
  };

  const setCar = (car) => {
    setChosenCar(car);
    setSearch(
      car.brand + " " + car.model + " " + car.year + " " + car.engine + " ",
      car.wltp
    );
    setDisplay(false);
  };

  if (automaticInput) {
    return (
      <div>
        <div className="w-screen flex text-center items-center justify-center h-screen bg-fixed bg-center bg-cover textcolor-white custom-img-2">
          <div className="rounded-xl shadow-2xl custom-img-3 bg-cover bg-center  ">
            <div className="rounded-xl text-white p-10 pl-[25rem] pr-[25rem] shadow-2xl bg-black/30 bg-cover bg-center  ">
              <div className="px-6 py-4">
                <ul className="flex-col space-y-4">
                  <h1 className="text-3xl">Carbon Calculator </h1>
                  <p className="bg-black/70 text-center">Car-brand</p>
                  <input
                    onClick={() => setDisplay(!display)}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900"
                    id="inline-full-name"
                    type="text"
                    placeholder="ex Volvo"
                  />
                  <div>
                    {display &&
                      carArray
                        .filter((car) =>
                          car.brand.toUpperCase().includes(search.toUpperCase())
                        )
                        .map((v, i) => {
                          return (
                            <div onClick={() => setCar(v)} key={i}>
                              <span className="bg-white/30">
                                {v.brand +
                                  " " +
                                  v.model +
                                  " " +
                                  v.year +
                                  " " +
                                  v.engine}
                              </span>
                            </div>
                          );
                        })}
                  </div>
                  <p className="bg-black/70 text-center">
                    Distance in kilometers
                  </p>
                  <input
                    value={distance}
                    onChange={distanceChangeHandler}
                    id="distanceInput"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900"
                    placeholder="ex: 20 km"
                  ></input>
                </ul>
                <div className="m-2 mt-10 items-center justify-center">
                  <Link scroll={false} href="#third-section">
                    {" "}
                    <button
                      onClick={() => {
                        setResult(automaticResult);
                      }}
                      type="button"
                      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Calculate
                    </button>
                  </Link>

                  <div className="mt-5 flex items-center justify-center">
                    <p>Click below to go to the manual calculator </p>
                  </div>
                  <div className="mt-5  items-center justify-center ">
                    <button
                      onClick={() => setAutomaticInput(!automaticInput)}
                      type="button"
                      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      To manual
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!automaticInput) {
    return (
      <div>
        <div className="w-screen flex text-center items-center justify-center h-screen bg-fixed bg-center bg-cover textcolor-white custom-img-2">
          <div className="rounded-xl  shadow-2xl custom-img-3 bg-cover bg-center  ">
            <div className="rounded-xl  text-white p-10 pl-[25rem] pr-[25rem] shadow-2xl bg-black/30 bg-cover bg-center  ">
              <div className="px-6 py-4">
                <ul className="flex-col space-y-4">
                  <h1 className="text-3xl">Carbon Calculator </h1>
                  <p className="bg-black/70 text-center">
                    Petrolconsumption in liter/100 km
                  </p>
                  <input
                    onChange={(e) => setManualConsumption(e.target.value)}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900"
                    id="inline-full-name"
                    type="text"
                    placeholder="ex: 7"
                  />
                  <div></div>
                  <p className="bg-black/70 text-center">
                    Distance in kilometers
                  </p>
                  <input
                    value={manualDistance}
                    onChange={(e) => setManualDistance(e.target.value)}
                    id="distanceInput"
                    type="text"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900"
                    placeholder="ex: 20"
                  ></input>
                </ul>
                <div className="m-2 mt-10 items-center justify-center">
                  <Link scroll={false} href="#third-section">
                    {" "}
                    <button
                      onClick={() => setResult(manualResult)}
                      type="button"
                      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Calculate
                    </button>
                  </Link>
                  <div className="mt-5 flex items-center justify-center">
                    <p>Click below to return to automatic calculator</p>
                  </div>
                  <div className="mt-5  items-center justify-center ">
                    <button
                      onClick={() => setAutomaticInput(!automaticInput)}
                      type="button"
                      class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      To automatic
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

{
  /* <p className="bg-white/50 text-center">Model</p>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900" id="inline-full-name" type="text" placeholder="ex XC40"></input>
              <p className="bg-white/50 text-center">Engine</p>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900" id="inline-full-name" type="text" placeholder="ex T2"></input>
              <p className="bg-white/50 text-center">Year</p>
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900" id="inline-full-name" type="text" placeholder="ex: 2020"></input> */
}

//  const filteredCars = () =>   {

//     if(carArray.filter((car) => car.brand.toUpperCase().includes(search.toUpperCase())).length > 0)  {
//       carArray.filter((car) => car.brand.toUpperCase().includes(search.toUpperCase())).map((v,i) => {
//       return <div onClick={() => setCar(v.brand +" "+ v.model +" "+ v.year +" "+ v.engine)}key={i}>
//       <span>{v.brand +" "+ v.model +" "+ v.year +" "+ v.engine}</span>
//       </div>}
//       )
//    }
//    else if((carArray.filter((car) => car.model.toUpperCase().includes(search.toUpperCase())).length > 0))
//     { carArray.filter((car) => car.model.toUpperCase().includes(search.toUpperCase())).map((v,i) => {
//      return <div onClick={() => setCar(v.brand +" "+ v.model +" "+ v.year +" "+ v.engine)}key={i}>
//      <span>{v.brand +" "+ v.model +" "+ v.year +" "+ v.engine}</span>
//     </div>}
//     ,console.log("model"))}
//  }

export default CalculatorInput;
