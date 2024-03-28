"use client";
import React from 'react'
import { usePathname } from 'next/navigation'
export default function page() {
    const pageFullUrl =usePathname();
    console.log(pageFullUrl.substring(1))
  return (
    <div>{pageFullUrl.substring(1)}</div>
  )
}
