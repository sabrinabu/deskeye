"use client";

import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { usePathname } from 'next/navigation'
import CustomerRightbar from '../components/CustomerRightbar';

export default function () {
    const pageFullUrl =usePathname();
    //console.log(pageFullUrl)
   // console.log(pageFullUrl.substring(1))
  
  return (
    <div>
        <Header/>
        <div className="flex flex-row mt-3">
        <Sidebar />

        
        <CustomerRightbar pageFullUrl={pageFullUrl.substring(1)} />
      </div>
    </div>
  )
}
