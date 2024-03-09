import Image from "next/image";
import React from "react";

const Getstarted = () => {
  return (
    <div className="bg-[#0052FE] align-self-center rounded-lg max-w-[800px] h-[385px] xl:w-[426px] xl:h-[515px] text-white flex flex-col gap-4 lg:gap-6 items-center justify-center pl-12 pr-12 pt-16 pb-16 text-center">
       <Image
        className="xl:hidden"
        src="/getstarted.svg"
        width={150}
        height={140}
        alt="getstarted image"
      />
      <h1 className="text-sm lg:text-3xl font-medium  lg:leading-[40px]">
        Get Started with KoinX for FREE
      </h1>
      <p className="text-[10px] font-light lg:leading-[26px]">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image
        className="hidden xl:inline"
        src="/getstarted.svg"
        width={178}
        height={166}
        alt="getstarted image"
      />
      <button className="w-[237px] h-[48px] rounded-md bg-white text-black font-bold pt-3 pb-3 pl-2 pr-2 flex items-center justify-center gap-2">
        <p>Get Started for FREE</p>
        <Image src="/arrowright.svg" height={25} width={25} alt="right arrow" />
      </button>
    </div>
  );
};

export default Getstarted;
