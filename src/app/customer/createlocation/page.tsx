"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/app/components/Header';
import Sidebar from '@/app/components/Sidebar';
import CreateLocation from '@/app/components/CreateLocation';

export default function page() {
    const pageFullUrl =usePathname();
  return (
    <div>
        <Header/>
        <div className="flex flex-row">
        <Sidebar />
        <CreateLocation pageFullUrl={pageFullUrl} />
      </div>
    </div>
  )
}
