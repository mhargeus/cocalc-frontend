import React from "react";

const SearchComp = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState(passingCarsDown);
  const [search, setSearch] = useState("");

  const setCar = (car) => {
    setSearch(car);
    setDisplay(false);
  };
  return (
    <div>
      <p className="bg-white/50 text-center">Car-brand</p>
      <input
        onClick={() => setDisplay(!display)}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-900"
        id="inline-full-name"
        type="text"
        placeholder="ex Volvo"
      />
      {display && (
        <div>
          {options
            .filter(({ brand }) => brand.indexOf(search.toLowerCase()) > -1)
            .map((v, i) => {
              return (
                <div onClick={() => setCar(v.brand)} key={i}>
                  <span>{v.brand}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchComp;
