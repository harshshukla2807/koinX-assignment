import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <div id="Tokenomics" className=" bg-white rounded-md p-3 mt-5 flex flex-col gap-5">
      <h1>Tokenomics</h1>
      <h2>Initial Distribution</h2>
      <div className="flex items-center justify-start">
        <Image src="/pie.svg" width={180} height={180} alt="pie" />
        <div className="m-5">
          <div className="flex gap-1 items-center ">
            <div className="w-2 h-2 rounded-full bg-blue-500 text-blue-500]"></div>
            <p>Crowdsale Investors: 80%</p>
          </div>
          <div className="flex gap-1 items-center ">
            <div className="w-2 h-2 rounded-full bg-[#FAA002] text-[#FAA002]"></div>
            <p>Foundation: 20%</p>
          </div>
        </div>
      </div>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque sed natus pariatur eos incidunt esse enim laudantium officia voluptatum accusantium, exercitationem voluptatibus ratione odit, porro vitae dolore nulla odio similique fuga. Voluptas reprehenderit officiis rem voluptate. Nobis fuga eos nisi dolorem et iure dolore cumque possimus. Est ratione dolore, numquam voluptate corporis delectus, hic quidem ipsam consectetur nam laudantium.</p>
      
    </div>
  );
};

export default Tokenomics;
