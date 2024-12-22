"use client";
import React from "react";
import WeatherApp from "../components/WeatherApp";

const page = () => {
  return (
    <div className="flex h-[100vh] w-full justify-center items-center flex-col p-8 gap-8">
      <WeatherApp />
    </div>
  );
};

export default page;