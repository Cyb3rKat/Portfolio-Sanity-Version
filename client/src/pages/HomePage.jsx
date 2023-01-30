import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col space-y-10 justify-center items-center w-full">
      <img
        className="w-52 h-52 rounded-full object-cover "
        src="/images/Alisa.jpg"
        alt=""
      />
      <div className="flex flex-col items-center space-y-2 md:space-y-5">
        <h1 className="text-slate-400 font-thin tracking-[10px] md:text-2xl">
          Alisa Khodadadi
        </h1>
        <h2 className="font-light text-md md:text-2xl">
          Freelance web designer, React developer
        </h2>
      </div>
    </div>
  );
};

export default HomePage;
