import React from "react";
import alert from "../images/alert.svg";
import amico from "../images/amico.svg";
import world from "../images/world.svg";
import virus from "../images/virus.svg";
import mask from "../images/mask.svg";
import homecare from "../images/homecare.svg";
import distancing from "../images/distancing.svg";
import symptoms from "../images/symptoms.svg";
import logo from "../images/logo.svg";
import pana from "../images/pana.svg";
import phn from "../images/phn.svg";

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

          <button className="flex mt-10 bg-[#44B564] hover:bg-white justify-center p-2 rounded-full  w-[30%]">
            <p className="text-white text-center font-medium text-[24px]  hover:text-[#44B564]">
              Let us help
            </p>
          </button>
        </div>
        {/* right image */}

        <div className="flex flex-col w-full">
          <img src={amico} className="w-full" alt="covid" />
        </div>
      </div>

      <div className="flex mx-[10%] mt-[10%] space-x-10">
        {/* left image */}
        <div className="flex flex-col w-full">
          <img src={world} />
        </div>

        {/* right section */}

        <div className="flex flex-col space-y-5">
          <h2 className="text-[36px] leading-[40px] tracking-[0.02em] font-semibold text-[#333333]">
            What we do?
          </h2>
          <hr className="border-[3px] border-[#64cf83] border-solid  w-[30%]" />

          <p className="text-[20px] font-medium leading-[32px] w-full">
            Covid 19 positive or Pneumonitis patient will be treated at home as
            per doctor order by GNC certified nursing staff. We offer different
            services which are listed below
          </p>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              Contact Tracing
            </p>
          </div>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              Vaccine Rollout{" "}
            </p>
          </div>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              Vaccine Certification
            </p>
          </div>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              QR code Check-in
            </p>
          </div>
          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              Quarantines
            </p>
          </div>
          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              PCR Testing
            </p>
          </div>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              Registering for a positive rapid antigen test result.
            </p>
          </div>

          <div className="flex space-x-3">
            <img src={virus} />
            <p className="text-[20px] font-medium leading-[32px]">
              financial assistances
            </p>
          </div>
          {/* quarantines */}
        </div>
      </div>
      {/* prevention */}
      <div className="flex flex-col text-center  mt-[10%] mx-[10%]">
        <h3 className="text-[36px] leading-[40px] font-semibold tracking-[0.02em]">
          Prevention
        </h3>
        <hr className="border-[3px] border-[#64cf83] mt-5 mx-auto  border-solid  w-[10%]" />
        <p className="text-[20px] font-medium leading-[32px] tracking-[0.02em] text-center mt-[5%] mx-[10%]">
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions. Floow advice provided by your local health
          authority.
        </p>
      </div>

      {/* prevention portal */}
      <div className="flex items-center  space-x-[5%] mx-[10%] mt-[5%]  ">
        {/* wear a mask */}

        <div className="flex flex-col w-full items-center bg-white rounded-[25px] shadow-[0px_0px_44px_-5px_rgba(102,102,102,0.1)] pb-[5%]">
          <img className="mb-[5%]" src={mask} />
          <h5 className="text-[20px] leading-[32px] text-center font-semibold ">
            Wear a mask
          </h5>

          <p className="text-[14px] font-medium tracking-[0.01em] leading-[28px] mx-[10%] text-[#777777] mt-5">
            Masks can help prevent the spread of the virus from the person
            wearing the mask to others.
          </p>
        </div>
        {/* wash your hands often */}

        <div className="flex flex-col w-full items-center bg-white rounded-[25px] shadow-[0px_0px_44px_-5px_rgba(102,102,102,0.1)] pb-[5%]">
          <img className="mb-[5%]" src={homecare} />
          <h5 className="text-[20px] leading-[32px] text-center font-semibold">
            Wash your hands often
          </h5>

          <p className="text-[14px] font-medium tracking-[0.01em] leading-[28px] mx-[10%] mt-5 text-[#777777]">
            Clean your hands with soop and water, or alcohol-based hand
            sanitizer.
          </p>
        </div>
        {/* physical distancing */}

        <div className="flex flex-col w-full items-center bg-white rounded-[25px] shadow-[0px_0px_44px_-5px_rgba(102,102,102,0.1)] pb-[5%]">
          <img className="mb-[5%]" src={distancing} />
          <h5 className="text-[20px] leading-[32px] text-center font-semibold">
            Physical distancing
          </h5>

          <p className="text-[14px] font-medium tracking-[0.01em] leading-[28px] mx-[10%] mt-5 text-[#777777]">
            Maintain a safe distance especially from anyone who is coughinf or
            sneezing.
          </p>
        </div>
      </div>

      {/* symptomps */}

      <div className="flex flex-col mt-[10%] items-center ">
        <h3 className="text-[36px] leading-[40px] text-center font-semibold tracking-[0.02em] text-[#333333]">
          Symptoms
        </h3>
        <hr className="border-[3px] border-[#64cf83] mt-5 mx-auto  border-solid  w-[10%]" />

        <p className="text-[20px] mt-10 font-medium leading-[32px] text-center tracking-[0.02em] text-[#777777] mx-[20%]">
          COVID-19 affects different people in different ways. Most infected
          people will develop mild to moderate illness and recover without
          hospitalization.
        </p>
        <div className="flex w-full justify-center mt-[5%]">
          <img className="flex" src={logo} />
          <img className="flex " src={symptoms} />
        </div>
      </div>

      {/* need help */}
      <div className="flex flex-col mt-[5%] items-center bg-white shadow-2xl rounded-[40px] py-10 mx-[10%]">
        <h2 className="text-[36px] leading-[40px] tracking-[0.02em] text-[#333333] text-center font-semibold">
          Need Help
        </h2>

        <hr className="border-[3px] border-[#64cf83] mt-5 mx-auto  border-solid  w-[10%]" />

        <p className="flex text-[20px] leading-[32px] font-medium mt-10 text-center mx-[20%]">
          Protect yourself and others around you by knowing the facts and taking
          appropriate precautions. Floow advice provided by your local health
          authority.
        </p>
        <img className="mt-[5%]" src={pana} />

        <div className="flex flex-col space-y-10">
          <div className="flex space-x-3 mt-[15%]">
            <img src={phn} />
            <div className="flex flex-col space-y-3">
              <p className="text-[18px] leading-[22px] font-medium uppercase text-[#555555]">
                National Coronavirus Health Information Line
              </p>
              <p className="text-[18px] leading-[22px] font-medium uppercase text-[#555555]">
                (+61) 1800 020 080.
              </p>
            </div>
          </div>

          <div className="flex space-x-3">
            <img src={phn} />
            <div className="flex flex-col space-y-3">
              <p className="text-[18px] leading-[22px] font-medium uppercase text-[#555555]">
                Service NSW
              </p>
              <p className="text-[18px] leading-[22px] font-medium uppercase text-[#555555]">
                (+61) 137788
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
