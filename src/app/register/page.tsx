import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="bg-blue-950 h-screen">
      <span className="flex items-center justify-center">
        {" "}
        <Image src="/registericon.png" width={300} height={300} alt="" />
      </span>
      <div className="m-4 flex items-center justify-center">
        <div className="w-[560px] h-[430px] bg-slate-50">
            <div className="mt-7 ml-56">Registeriung</div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Vorname*</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Nachname*</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div className="ml-16">Firmname</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Email*</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-16">Telephonenumber</div>
            <div>
              <input className="w-96 border border-blue-950 ml-16" />
            </div>
          </div>
          <button className="ml-32 bg-blue-950 mt-6 text-white h-7">RegisterungAnfrage sender</button>
        </div>
      </div>
    </div>
  );
}
