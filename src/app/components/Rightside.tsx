import React from 'react'

 type urlProps={
  pageFullUrl:string
};

export default function Rightside({pageFullUrl}:urlProps) {
  return (
    <div className='basis-[84%] bg-blue-700 h-[calc(100vh-60px)] p-2'>{pageFullUrl}</div>
  )
}
