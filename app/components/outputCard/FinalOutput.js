import React from "react";

const FinalOutput = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <div className="md:h-[200px] md:w-[500px] w-full text-black bg-white p-8 flex flex-col justify-center items-center rounded-3xl md:gap-8 gap-4">
      <div
        id="outputCard"
        className="flex flex-col gap-4 justify-center items-center"
      >
        <div className="flex flex-row gap-4 items-center">
          <p id="city-name" className="font-bold">
            {weatherData.location.name}
          </p>
          <p id="countryName" className="bg-orange-400 px-4 py-1 rounded-3xl">
            {weatherData.location.country}
          </p>
        </div>
        <div className="flex flex-row text-5xl font-bold">
          {weatherData.current.temp_c} °C
        </div>
        <div id="loc-time" className="italic">
          {weatherData.location.localtime}
        </div>
      </div>
    </div>
  );
};

export default FinalOutput;