import React from "react";

type urlprops = {
  pageFullUrl: string;
};

export default function CreateDevice({ pageFullUrl }: urlprops) {
  const parts = pageFullUrl.substring(1).split("/");
  console.log(parts);
  return (
    <div className="basis-[84%] bg-blue-950 h-screen p-2">
      <div className="mt-3 text-white flex">
        {" "}
        <span className="text-blue-500">{parts[0]}</span>
        <span>/{parts[1]}</span>
      </div>
      <div className="bg-blue-500 h-[calc(100vh-180px)] px-20">
        <div className="pt-16 text-white text-xl">Gerät Hinzufugen</div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2 text-white">Title</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2 text-white">Modell</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2 text-white">IP-Adresse</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2 text-white">Der Agent, der das bedient</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2  text-white">MAC (für die Sensoren gilt)</span>
          </div>
          <div className="col-span-9 flex">
            <div className="grid grid-cols-9 gap-20">
              <div className="col-span-3 flex gap-3 border">
                <input type="checkbox" />
                <span className="mt-2  text-white">Ping dieses Grerät an</span>
                
              </div>

              <div className="col-span-6 flex gap-2">
                {" "}
                <input className="" type="checkbox" />
                <span className="mt-2 text-balance  text-white">Dieses Grerät Über SMMp abtragen</span>
              </div>
             
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2  text-white">DeskEye Remote Desktop</span>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-9 gap-3">
              <span className="col-span-5">
                <input className="w-full p-1 border border-gray-100 rounded" type="email" />
              </span>
              <span className="col-span-4">
                <input className="w-full p-1 border border-gray-100 bg-slate-200 rounded" type="password"/>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2  text-white">Beschriebung</span>
          </div>
          <div className="col-span-9">
            <textarea className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-start-4 col-span-9">
            <button className="w-full p-1 bg-green-700 rounded  text-white">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
