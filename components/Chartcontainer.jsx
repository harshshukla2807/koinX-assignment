import Image from "next/image";
import React from "react";
import { rootUrl } from "@/app/page";
import TradingViewWidget from "./Chart";

const getdata = async () => {
  const queryParams = new URLSearchParams({
    ids: "bitcoin",
    vs_currencies: "inr,usd",
    include_24hr_change: true,
    precision: 2,
  });

  const url = `${rootUrl}/simple/price?${queryParams}`;
  const options = { method: "GET" };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

const Chartcontainer = async () => {
  const data = await getdata();

  return (
    <div className="bg-white p-6 rounded-md">
      <div className="flex">
        <div className="flex gap-3 items-center">
          <span className="">
            <Image
              src="/bitcoin.svg"
              width={32}
              height={32}
              alt="bitcoin icon"
            />
          </span>
          <h1 className="text-lg font-semibold">Bitcoin</h1>
          <strong className="text-[#696969] text-sm">BTC</strong>
        </div>
        <button className="bg-[#768396] rounded-md p-3 pb-1 pt-1 ml-6 text-white">
          Rank #1
        </button>
      </div>

      {/* chart */}
      <div>
        <div className="flex-col">
          <div className="flex mt-5 gap-4 md:gap-10 items-center">
            <h1 className="font-semibold text-2xl sm:text-4xl">${data.bitcoin.usd}</h1>
            <div className="flex bg-[#ecffec] gap-2 p-1 pl-2 pr-2 rounded-sm">
              <Image
                src="/polygon.svg"
                height={15}
                width={15}
                alt="polygon up image"
              />
              <span>2.51%</span>
            </div>
            <span>(24H)</span>
          </div>
          <h1 className="mt-2 font-medium text-sm sm:text-lg">₹{data.bitcoin.inr}</h1>
        </div>
        
        <hr className="mb-8 mt-8" />

        <div>
            <h2 className="font-semibold">Bitcoin Price Chart (USD)</h2>
            {/* fetch chart */}
            <TradingViewWidget />
            
        </div>
      </div>
    </div>
  );
};

export default Chartcontainer;
