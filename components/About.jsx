import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-3 bg-white rounded-md p-3 mt-5">
      <h1 className="text-xl sm:text-3xl font-semibold mb-4">About Bitcoin</h1>
      <div className="flex-col gap-2">
        <h3 className="text-[12px] font-semibold">What is Bitcoin?</h3>
        <p className="text-[10px]">
          Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="flex flex-col gap-2 ">
        <h3 className="text-[12px] font-semibold">
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="text-[10px] gap-2 flex flex-col">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aut, non aliquam laudantium reprehenderit, beatae perspiciatis nemo
            nobis soluta explicabo vitae nulla magnam error dolorum corporis
            veritatis harum voluptatem tenetur dicta quidem, commodi incidunt?
            Recusandae culpa distinctio incidunt assumenda itaque numquam
            voluptatum, temporibus nostrum officiis iure vero, dolores
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aut, non aliquam laudantium reprehenderit, beatae perspiciatis nemo
            nobis soluta explicabo vitae nulla magnam error dolorum corporis
            veritatis harum voluptatem tenetur dicta quidem, commodi incidunt?
            Recusandae culpa distinctio incidunt assumenda itaque numquam
            voluptatum, temporibus nostrum officiis iure vero, Lorem ipsum dolor
            sit amet consectetur adipisicing elit. A ipsum nihil dolor earum
            dolores. Sed dolore esse at voluptatibus placeat.dolores
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisiloremcing Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Quis, animi
            exercitationem tempora asperiores quidem vel eligendi, explicabo
            porro quam placeat atque doloremque, officiis dolore. Quis magnam
            animi adipisci impedit reprehenderit. elit. Voluptatum aut, non
            aliquam laudantium reprehenderit, beatae perspiciatis nemo nobis
            soluta explicabo vitae nulla magnam error dolorum corporis veritatis
            harum voluptatem tenetur dicta quidem, commodi incidunt? Recusandae
            culpa distinctio incidunt assumenda itaque numquam voluptatum,
            temporibus nostrum officiis iure vero, dolores
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-[12px] font-semibold">Already Holding Crypto?</h3>
        <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] flex flex-row justify-around gap-3 rounded-lg p-2 max-w-[376px] sm:w-[376px] sm:h-[140px]">
          <Image
            src="/about1.svg"
            height={120}
            width={120}
            alt="already holding crypto 1 image"
          />
          <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className="text-white text-base">Calculate Your Profits</h2>
            <button className="w-[122px] h-[30px] font-semibold rounded-md bg-white text-black text-[10px] flex gap-2 items-center justify-center">
             <p>Check Now</p>
             <Image src="/arrowright.svg" height={20} width={20} alt="right arrow"/> 
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#FF9865] to-[#EF3031] flex flex-row justify-around gap-3 rounded-lg p-2 max-w-[376px] sm:w-[376px] sm:h-[140px]">
          <Image
            src="/about2.svg"
            height={120}
            width={120}
            alt="already holding crypto 1 image"
          />
          <div className="flex flex-col gap-3 items-center justify-center">
            <h2 className="text-white text-base">Calculate Your Tax Liability</h2>
            <button className="w-[122px] h-[30px] font-semibold rounded-md bg-white text-black text-[10px] flex gap-2 items-center justify-center">
             <p>Check Now</p>
             <Image src="/arrowright.svg" height={20} width={20} alt="right arrow"/> 
            </button>
          </div>
        </div>
        </div> 
      </div>
    </div>
  );
};

export default About;
