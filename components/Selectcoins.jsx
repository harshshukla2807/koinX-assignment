"use client";

import { useRouter } from "next/navigation";

const Selectcoins = ({ data }) => {
  const router = useRouter();

  const handleChange = (e) => {
    const selectedCoin=e.target.value
    router.push(`Coins/${selectedCoin}`);
  };

  return (
    <div className="flex items-center justify-center mt-[10%]">
      <div className="text-3xl">
        <label className="mr-10" htmlFor="blogCategory">Coins:</label>
        <select className="" name="coins" id="coins" onChange={handleChange}>
          <option className="flex justify-center items-center" value="" hidden>
            <div>Select Coin</div>
          </option>
          {data.map((data, index) => {
            return (
                <option value={data.id} key={index}>
                  {data.id}
                </option>
             
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Selectcoins;
