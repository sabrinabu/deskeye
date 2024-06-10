"use client"
import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/updatedCustomer/Sidebar'
import Feed from '../components/updatedCustomer/Feed'


export default function page() {

  return (
    <div><Header/>
    <div className='flex flex-row '>
    <Sidebar/> 

    </div>
   
    </div>
  )
}
