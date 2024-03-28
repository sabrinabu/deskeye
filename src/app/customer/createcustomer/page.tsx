"use client"

import CreateCustomer from '@/app/components/CreateCustomer'
import Header from '@/app/components/Header'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function () {
    const pageFullUrl =usePathname();
    return (
        <div>
            <Header/>
            <div className="flex flex-row">
            <Sidebar />
            <CreateCustomer pageFullUrl={pageFullUrl} />
          </div>
        </div>
      )
}
