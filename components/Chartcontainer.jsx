import Image from "next/image";
import React from "react";
import { rootUrl } from "@/app/utils/rooturl";
import TradingViewWidget from "./Chart";

const getdata = async (params) => {
  // console.log(params.slug)
  const queryParams = new URLSearchParams({
    vs_currency: "usd",
    ids:`${params?.slug}`
  });

  const url = `${rootUrl}/coins/markets?${queryParams}`;
  const options = { method: "GET" };

  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};


const Chartcontainer = async ({params}) => {
  // console.log(params)
  const data = await getdata(params);

  return (
    <div className="bg-white p-6 rounded-md">
    {data.map((data,index)=><div key={index}>
      <div className="flex">
        <div className="flex gap-3 items-center">
          <span className="">
            <Image
              src={data.image}
              width={32}
              height={32}
              alt="bitcoin icon"
            />
          </span>
          <h1 className="text-lg font-semibold">{data.name}</h1>
          <strong className="text-[#696969] text-sm">{data.symbol}</strong>
        </div>
        <button className="bg-[#768396] rounded-md p-3 pb-1 pt-1 ml-6 text-white">
          Rank #{data.market_cap_rank}
        </button>
      </div>

      {/* chart */}
      <div>
        <div className="flex-col">
          <div className="flex mt-5 gap-4 md:gap-10 items-center">
            <h1 className="font-semibold text-2xl sm:text-4xl">${data.current_price}</h1>
            <div className={`flex ${data.price_change_percentage_24h>=0? 'bg-[#ecffec]':'bg-red-100'} gap-2 p-1 pl-2 pr-2 rounded-sm`}>
              <Image
              className=""
                src={`/${data.price_change_percentage_24h>=0? 'polygon.svg':'polygon1.svg'}`}
                height={15}
                width={15}
                alt="polygon up image"
              />
              <span>{data.price_change_percentage_24h}%</span>
            </div>
            <span>(24H)</span>
          </div>
          <h1 className="mt-2 font-medium text-sm sm:text-lg">₹{data.current_price * 82.7}</h1>
        </div>
        
        <hr className="mb-8 mt-8" />
      
        <div>
            <h2 className="font-semibold">{data.name} Price Chart (USD)</h2>
            {/* fetch chart */}
            <TradingViewWidget />
            
        </div>
      </div>
      </div>)}
    </div>
  );
};

export default Chartcontainer;
