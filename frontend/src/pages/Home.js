import React from "react";
import alert from "../images/alert.svg";
import amico from "../images/amico.svg";

const Home = () => {
  return (
    <div>
      <div className="flex  mx-[10%] mt-[5%] justify-around">
        {/* left banner */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-1 text-[#ff0000] uppercase">
            <img src={alert} />
            <h5 className="font-medium text-lg tracking-[0.02em]">
              covid-19 alert
            </h5>
          </div>

          <h1 className="text-[42px] tracking-[0.01em] font-bold leading-[56px] w-[65%]">
            Together we fight COVID-19
          </h1>

          <p className="text-[22px] text-[#333333] opacity-60 w-[50%] mt-5">
            Pandemica is a platform to fight against covid-19. We offer
            different services and assistance. Go through our platform and
            discover what you need.
          </p>

          <button className="flex mt-10 bg-[#44B564] justify-center p-2 rounded-full  w-[30%]">
            <p className="text-white text-center font-medium text-[24px]">
              Let us help
            </p>
          </button>
        </div>
        {/* right image */}

        <div className="flex flex-col w-full">
          <img src={amico} className="w-full" alt="covid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
