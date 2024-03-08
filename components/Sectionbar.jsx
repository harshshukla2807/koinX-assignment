'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Sectionbar = () => {
    const [active, setActive]=useState(null)
    
    const sectionbars=['Overview','Fundamentals','News Insights','Sentiments','Team','Technicals','Tokenomics']
  return (
    <div className=''>
        <ul className='flex overflow-x-auto gap-6 mt-6 mb-6 text-sm border-b-2 border-gray-400' style={{ WebkitScrollbar: 'display: none', scrollbarWidth: 'none' }}>
            {sectionbars.map((sectionbar, index)=>{
                return <li className={`text-nowrap ${active===index? "text-[#0141CF] border-b-2 pb-4 border-[#0141CF]" : ""}`} value={active} onClick={()=>setActive(index)}><Link href={'#Overview'}>{sectionbar}</Link></li>
            })}
            
            {/* <li><Link href={'#Fundamentals'}>Fundamentals</Link></li>
            <li><Link href={'#News Insights'}>News Insights</Link></li>
            <li><Link href={'#Sentiments'}>Sentiments</Link></li>
            <li><Link href={'#Team'}>Team</Link></li>
            <li><Link href={'#Technicals'}>Technicals</Link></li>
        <li><Link href={'#Tokenomics'}>Tokenomics</Link></li> */}
        </ul>
      
    </div>
  )
}

export default Sectionbar