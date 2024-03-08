import React from "react";
import { rootUrl } from "@/app/page";
import { format } from "date-fns";

const getdata = async () => {
  const queryParams = new URLSearchParams({
    vs_currency: "usd",
    ids: "bitcoin",
    price_change_percentage: "1y",
    sparkline: true,
    precision: 2,
  });

  const url = `${rootUrl}/coins/markets?${queryParams}`;
  const options = { method: "GET" };

  const res = await fetch(url, options);
  const data = await res.json();

  if (!res.ok) {
    console.log();
  }
  return data;
};

const Performance = async () => {
  const data = await getdata();
  // console.log(data)

  return (
    <div className="bg-white rounded-md p-3">
      <div>
        {/* performance div */}
        <h1 className="text-xl sm:text-3xl font-semibold mb-10">Performance</h1>
        {data.map((item) => (
          <div key={item.name} className="flex flex-col gap-9">
            {/* upper part */}
            <div className="flex justify-center items-center  text-xs sm:text-md lg:text-lg">
              <div className="flex flex-col text-nowrap justify-center items-center">
                <p>Today's Low</p>
                <p>{item.low_24h}</p>
              </div>
              <div className="relative w-[100%] ml-3 mr-3 sm:ml-5 sm:mr-5 flex-col">
                <img
                  src="/performancebar.svg"
                  alt=""
                  className="object-cover rounded-lg w-[100%] h-2"
                />
                <div className="flex flex-col justify-center items-center absolute right-[10%] w-fit ">
                  <img
                    src="/performanceUpArrow.svg"
                    className="h-4 w-5 "
                    alt=""
                  />
                  <p>$67,200</p>
                </div>
              </div>
              {/* bottom part */}
              <div className="flex flex-col text-nowrap justify-center items-center">
                <p className="">Today's High</p>
                <p>{item.high_24h}</p>
              </div>
            </div>
            <div className="flex justify-center items-center  text-xs sm:text-md lg:text-lg">
              <div className="flex flex-col text-nowrap justify-center items-center">
                <p className="pl-2">52W Low</p>
                <p>25116</p>
              </div>

              <div className="relative w-[100%] ml-6 mr-7 sm:ml-7 sm:mr-9 flex-col">
                <img
                  src="/performancebar.svg"
                  alt=""
                  className="object-cover rounded-lg w-[100%] h-2"
                />
              </div>

              <div className="flex flex-col text-nowrap justify-center items-center">
                <p>52W High</p>
                <p>{item.ath}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {data.map((item) => {
        return (
          <div key={item.id} className="text-[12px] lg:text-base font-medium">
            {/* Fundamentals div */}
            <div className="mt-10">
              <div className="flex gap-2 items-center">
                <h1 className="text-base sm:text-xl font-semibold opacity-60">
                  Fundamentals
                </h1>
                <img src="/!.svg" alt="" className="" />
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-10">
                <div>
                  <div className="flex flex-col gap-4  mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Bitcoin Price</h2>
                      <p>${item.current_price}</p>
                    </div>
                    <hr className="border-b-2 border-gray-200 " />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">24h Low / 24h High</h2>
                      <p className="">
                        ${item.low_24h} / ${item.high_24h}
                      </p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">7d Low / 7d High</h2>
                      <p>
                        ${item.sparkline_in_7d.price[0].toFixed(2)} / $
                        {item.sparkline_in_7d.price[
                          item.sparkline_in_7d.price.length - 1
                        ].toFixed(2)}
                      </p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Trading Volume</h2>
                      <p>${item.total_volume}</p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Market Cap Rank</h2>
                      <p>#{item.market_cap_rank}</p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Market Cap</h2>
                      <p>${item.market_cap}</p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Market Cap Dominance</h2>
                      <p>$38.343%</p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">Volume / Market Cap</h2>
                      <p>${item.market_cap_change_percentage_24h}</p>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">All-Time High</h2>
                      <div>
                        <div className="flex flex-col items-end">
                          <p>${item.ath}  <span className="text-red-500">-75.6%</span></p>
                        <p className="text-xs">
                          {format(new Date(item.ath_date), "MMM d, yyyy")}{" "}
                          (about 1 year)
                        </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                  <div className="flex flex-col gap-4 mt-3">
                    <div className="flex justify-between sm:w-72 lg:w-96">
                      <h2 className="text-gray-400">All-Time Low</h2>
                      <div>
                        <div className="flex flex-col items-end">
                          <p>${item.atl} <span className="text-green-500">24729.1%</span></p>
                        <p className="text-xs">
                          {format(new Date(item.atl_date), "MMM d, yyyy")}{" "}
                          (about 9 year)
                        </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border-b-2 border-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Performance;
