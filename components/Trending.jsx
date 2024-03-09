import { rootUrl } from '@/app/page';
import Image from 'next/image';
import React from 'react'

export const getdata = async () => {
 
  
    const url = `${rootUrl}/search/trending`;
    const options = { method: "GET" };
  
    const res = await fetch(url, options);
    const data = await res.json();
    
    return data;
  };
  
  
  const Trending = async() => {
    const allData= await getdata()
    const data = allData.coins.slice(0, 3);
    
  return (
    <div className=' bg-white rounded-md p-3 mt-5 h-fit max-w-[420px]'>
        <h1 className='font-semibold text-2xl'>Trending Coins (24h)</h1>
        {data.map((singleItem)=>{
            return <div>
            <div className='flex mt-3 justify-between items-center'>
                <div className='flex items-center '>
                    <Image className='rounded-xl' src={singleItem.item.thumb} height={30} width={30} alt='img'/>
                    <h1 className='text-sm font-medium ml-2'>{singleItem.item.name} ({singleItem.item.symbol})</h1>
                </div>
                <div className='w-[84px] h-[28px] flex gap-2 bg-[#EBF9F4] rounded-lg p-2 items-center justify-center'> 
                    <Image src='/polygon.svg' height={10} width={10} alt='up arrow'/>
                    <p className='text-[#14B079]'>{singleItem.item.data.price_change_percentage_24h.usd.toFixed(2)}%</p>
                </div>
            </div>
        </div>
        })}
    </div>
  )
}

export default Trending