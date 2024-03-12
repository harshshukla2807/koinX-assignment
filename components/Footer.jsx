import React from "react";
import { getdata } from "./Trending";
import Image from "next/image";

const Footer = async () => {
  const data = await getdata();

  return (
    <div className="bg-white rounded-md p-10 mt-5 flex flex-col gap-3">
      <div className="flex flex-col gap-4">
        <h1 className="xl:text-2xl font-semibold">You May Also Like</h1>
        <div style={{ WebkitScrollbar: 'display: none', scrollbarWidth: 'none' }} className="flex overflow-x-scroll overflow-y-hidden gap-2">
          {data.coins.map((singleCoin,index) => {
            return (
              <div className="h-[160px] min-w-[252px] rounded-lg p-2 border-2 border-gray-300 flex flex-col gap-1" key={index}>
                <div className="flex gap-2 items-center text-xs">
                  <Image
                    className="rounded-xl"
                    src={singleCoin.item.small}
                    height={20}
                    width={20}
                    alt="icon logo"
                  />
                  <h1 className="">{singleCoin.item.symbol}</h1>
                  <p className={`p-1 ${singleCoin.item.data.price_change_percentage_24h.usd >= 0 ? 'bg-[#EBF9F4] text-green-500' : 'bg-red-100 text-red-500'} rounded-md`}>
                        {singleCoin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
                <h1 className="font-semibold">{singleCoin.item.data.price}</h1>
                <Image
                  className=""
                  src={singleCoin.item.data.sparkline}
                  height={60}
                  width={200}
                  alt="icon graph"
                />
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="flex flex-col gap-4">
        <h1 className="xl:text-2xl font-semibold">Trending Coins</h1>
        <div style={{ WebkitScrollbar: 'display: none', scrollbarWidth: 'none' }} className="flex overflow-x-scroll overflow-y-hidden  gap-2">
          {data.coins.map((singleCoin,index) => {
            return (
              <div className="h-[160px] min-w-[252px] rounded-lg p-2 border-2 border-gray-300 flex flex-col gap-1" key={index}>
                <div className="flex gap-2 items-center text-xs">
                  <Image
                    className="rounded-xl"
                    src={singleCoin.item.small}
                    height={20}
                    width={20}
                    alt="icon logo"
                  />
                  <h1 className="">{singleCoin.item.symbol}</h1>
                  <p className={`p-1 ${singleCoin.item.data.price_change_percentage_24h.usd >= 0 ? 'bg-[#EBF9F4] text-green-500' : 'bg-red-100 text-red-500'} rounded-md`}>
                        {singleCoin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
                <h1 className="font-medium">{singleCoin.item.data.price}</h1>
                <Image
                  src={singleCoin.item.data.sparkline}
                  height={60}
                  width={200}
                  alt="icon graph"
                />
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
