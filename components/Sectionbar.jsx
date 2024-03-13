'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Sectionbar = () => {
    const [active, setActive]=useState(0)
    
    const sectionbars=['Overview','Fundamentals','News Insights','Sentiments','Team','Technicals','Tokenomics']
  return (
    <div className='ml-2'>
        <ul className='flex overflow-x-auto gap-6 mt-6 mb-6 text-sm border-b-2 border-gray-400' style={{ WebkitScrollbar: 'display: none', scrollbarWidth: 'none' }}>
            {sectionbars.map((sectionbar, index)=>{
                return <Link href={`#${sectionbar}`} key={index} ><li className={`text-nowrap ${active===index? "text-[#0141CF] border-b-2 pb-4 border-[#0141CF]" : ""}`} value={active} onClick={()=>setActive(index)}>{sectionbar}</li></Link>
            })}
        </ul>
      
    </div>
  )
}

export default Sectionbar