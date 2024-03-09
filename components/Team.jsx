import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='bg-white rounded-md p-3 mt-5 flex flex-col gap-6 '>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae repellat tempore magnam ducimus blanditiis quibusdam voluptates porro quisquam deleniti? Dolores.</p>
        <div className='flex flex-col sm:flex-row bg-[#E8F4FD] gap-6 pl-4 pr-4 pt-2 pb-2 rounded-lg items-center'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <Image  className='rounded-lg' src="/person1.svg" width={120} height={120} alt='person1'/>
                <h3 className='font-medium text-[16px] text-nowrap'>John smith</h3>
                <p className='text-[12px]'>designation</p>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, tempore quo? Impedit dicta aliquid consequatur quo vel deserunt doloremque exercitationem! Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet? Odit veniam itaq Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nulla. amet consectetur adipisicing elit. Fugit, cupiditate.</div>
        </div>
        <div className='flex flex-col sm:flex-row bg-[#E8F4FD] gap-6 pl-4 pr-4 pt-2 pb-2  rounded-lg items-center'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <Image className='rounded-lg' src="/person2.svg" width={120} height={120} alt='person1'/>
                <h3 className='font-medium text-[16px] text-nowrap'>elina williams</h3>
                <p className='text-[12px]'>designation</p>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, tempore quo? Impedit dicta aliquid consequatur quo vel deserunt doloremque exercitationem! Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet? Odit veniam itaq Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nulla. amet consectetur adipisicing elit. Fugit, cupiditate.</div>
        </div>
        <div className='flex flex-col sm:flex-row bg-[#E8F4FD] gap-6 pl-4 pr-4 pt-2 pb-2  rounded-lg items-center'>
            <div className='flex flex-col gap-1 justify-center items-center'>
                <Image className='rounded-lg' src="/person1.svg" width={120} height={120} alt='person1'/>
                <h3 className='font-medium text-[16px] text-nowrap'>John smith</h3>
                <p className='text-[12px]'>designation</p>
            </div>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, tempore quo? Impedit dicta aliquid consequatur quo vel deserunt doloremque exercitationem! Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, amet? Odit veniam itaq Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, nulla. amet consectetur adipisicing elit. Fugit, cupiditate.</div>
        </div>
    </div>
  )
}

export default Team