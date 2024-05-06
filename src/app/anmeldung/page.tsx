"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function page() {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-blue-950 h-screen">
      {" "}
      <span className="flex items-center justify-center">
        {" "}
        <Image src="/registericon.png" width={300} height={300} alt="" />
      </span>
      <div className="m-4 flex items-center justify-center">
        <div className="w-[560px] h-[430px] bg-slate-50">
          <div className="mt-7 ml-56">Anmeldung</div>

          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Email</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Password</div>
            <div className="flex">
              <input type={show? "password":"text"} className="w-80 border border-blue-950 ml-16" />
              <button className="w-16 bg-blue-950 text-white">
                <div className="ml-5" onClick={()=>setShow(!show)}>
                  <Eye />
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex mt-6">
              <input type="checkbox" className="ml-4"/>
              <div className="ml-2">Angemenden bleiben?</div>
            </div>
            <div className="underline mt-6">Password Vergessen</div>
           
          </div>
          <button className="bg-blue-950 h-8 text-white w-64 mt-11 ml-44">Anmeldung</button>
          <div className="flex ml-44 mt-4 gap-3 text-blue-950">
            <div>Noch Keinen Account?</div>
            <div className="underline">Registerung</div>
          </div>
        </div>
      </div>
    </div>
  );
}
