import React from "react";

type urlprops = {
  pageFullUrl: string;
};

export default function CreateLocation({ pageFullUrl }: urlprops) {
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
        <div className="pt-16 text-white ">Ort Hinzufugen</div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Title</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Vollname</span>
          </div>
          <div className="col-span-9">
            <input className="w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Address</span>
          </div>
          <div className="col-span-9">
            <input className="p-1 w-full bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <div className="col-span-3">
            <span className="pl-2">Sontiges</span>
          </div>
          <div className="col-span-9">
            <textarea className=" w-full p-1 bg-slate-400 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-12 mt-3 gap-3">
          <button className="p-1 w-full col-span-9 col-start-4 bg-green-600 hover:bg-green-500 rounded border border-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
