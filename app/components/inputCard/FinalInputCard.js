import React, { useState } from "react";

const FinalInputCard = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="md:h-[300px] md:w-[500px]  text-black w-full bg-white p-8 flex flex-col justify-center items-center gap-3 rounded-full">
      <p className="md:text-4xl text-3xl">
        <span className="font-bold ">Weather Info:</span>
      </p>
      <div className="flex flex-col justify-center items-center gap-4 text-center">
        <div className="flex flex-col justify-center items-center">
          <p className="font-extralight">
            Get the weather details of any city, Right Now!
          </p>
        </div>
        <div className="flex sm:flex-row justify-center items-center flex-col gap-3">
          <input
            id="cityInput"
            className="px-4 py-2 border rounded-xl md:rounded-s-2xl"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            id="searchBtn"
            className="bg-blue-600 text-white px-4 py-2 md:rounded-e-2xl rounded-xl w-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalInputCard;