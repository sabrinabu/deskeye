"use client";

import Image from "next/image";
import React from "react";
import background from "../../../public/background.jpg";

export default function page() {
  return (
    <div className="relative">
      <Image src={background} alt="" className="bg-cover h-screen" />
      <div className="absolute z-20 top-10 text-center text-gray-100">
        <span className="">
          <Image
            src="/icon.png"
            width={150}
            height={120}
            alt=""
            className="text-gray-100"
          />
        </span>
        <div className="flex mt-36 gap-2">
          <div className="flex-1 px-2 text-black">
            Wir sind ein dynamisches Unternehmen aus Berlin-Mitte und arbeiten
            mit Leidenschaft in unserem Beruf. Viele von uns haben schon in den
            80ern und 90ern – damals noch als Kinder – mit großer Hingabe an
            allerlei Elektrogeräten und ersten Computern gebastelt.
          </div>
          <div className="flex-1 bg-slate-50 mr-4 h-52 shadow-lg shadow-indigo-500/40">
            <div className="flex flex-col">
              <span className="text-center mt-2 text-black animate-pulse">
                Log in to Deskeye-V5
              </span>
              <input
                type="text"
                placeholder="email"
                className="ml-2 mr-2 bg-slate-300 rounded-md mt-3"
              />
              <input
                type="number"
                placeholder="password"
                className="ml-2 mr-2 bg-slate-300 mt-3 rounded-md"
              />
              <button className="bg-slate-300 ml-2 mr-2 rounded-md mt-3 text-black animate-pulse">
                login here
              </button>
              <span className="mt-2 px-2 text-black text-start">
                Forget password?
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
