import Image from 'next/image'
import React from 'react'

const Sentiments = () => {
  return (
    <div id='Sentiments' className='bg-white rounded-md p-3 mt-5'>
        <h1 className='text-xl sm:text-3xl font-semibold mb-4'>Sentiments</h1>
        <div className='flex-col gap-4'>
            <div className='flex gap-2'>
                <h1>Key Events</h1>
                <img src="/!.svg" alt="" className="" />
            </div>
            
            <div style={{ WebkitScrollbar: 'display: none', scrollbarWidth: 'none' }} className='flex overflow-x-scroll mt-3'>
                <div className='flex gap-2'>
                    <div className='flex bg-[#E8F4FD] rounded-md w-[15rem] h-[7rem] items-start p-4 gap-2'>
                        <Image src="/sentiment1.svg" height={36} width={36} alt='sentiment 1st div image'/>
                        <div className='text-[8px] flex flex-col gap-2'>
                            <h3 className='text-[10px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, sed. Eos accusamus fugiat molestiae iusto cumque tempora facere debitis provident?</p>
                        </div>
                    </div>
                    <div className='flex bg-[#EBF9F4] rounded-md w-[15rem] h-[7rem] items-start p-4 gap-2'>
                        <Image src="/sentiment2.svg" height={36} width={36} alt='sentiment 2nd div image'/>
                        <div className='text-[8px] flex flex-col gap-2'>
                            <h3 className='text-[10px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eveniet accusantium, sapiente cum incidunt modi distinctio? Magni tempore amet omnis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className='flex gap-2 mt-3'>
                <h1>Analyst Estimates</h1>
                <img src="/!.svg" alt="" className="" />
            </div>
            
            <div className='flex gap-10 mt-3 items-center justify-start'>
                <div className='flex rounded-full h-[80px] w-[80px] bg-[#EBF9F4] items-center justify-center text-[#0FBA83]'>
                    <p className='text-[#0FBA83] font-normal text-2xl'>76</p>%
                </div>
                
                <div className='flex flex-col gap-2 items-center '>
                    <div className='flex gap-2 font-light items-center text-[10px] w-full'><p>Buy</p> <hr className='border-[2px] min-w-32 sm:min-w-52 rounded-lg border-[#00B386]'/><p>76%</p></div>
                    <div className='flex gap-2 font-light items-center text-[10px] w-full'><p>Hold</p> <hr className='border-[2px] min-w-6 sm:min-w-12 rounded-lg border-[#C7C8CE]'/><p>8%</p></div>
                    <div className='flex gap-2 font-light items-center text-[10px] w-full'><p>Sell</p> <hr className='border-[2px] min-w-10 sm:min-w-24 rounded-lg border-[#F7324C]'/><p>16%</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sentiments