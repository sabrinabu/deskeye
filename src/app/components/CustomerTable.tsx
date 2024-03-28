"use client";
import { Button, User } from "@nextui-org/react";
import React from "react";
import TableComponent from "./TableComponent";
import { Scrollbars } from "react-custom-scrollbars";

export default function CustomerTable() {
  return (
    <div className="basis-[80%] border">
      <div className="flex gap-3 p-2">
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-44 h-7">
          <span>Gesamt</span>
          <span>91</span>
        </div>
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-44 h-7">
          <span>Server</span>
          <span>91</span>
        </div>
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-44 h-7">
          <span>Arbeitplatz</span>
          <span>91</span>
        </div>
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-44 h-7">
          <span>Geräte</span>
          <span>91</span>
        </div>
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-44 h-7">
          <span>Websiten</span>
          <span>91</span>
        </div>
        <div className="flex justify-between items-center px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded shadow-lg w-40 h-7">
          <span>DynDNS-server</span>
          <span>91</span>
        </div>
      </div>
      <div className="bg-sky-700 flex flex-col mt-2 px-2">
        <span className="text-white">Kunden:</span>
        <span className="mt-3 text-white">Ort:</span>
      </div>
      <div className="max-h-[55vh] overflow-y-scroll">
        {" "}
        <TableComponent />
        <TableComponent />
      </div>
    </div>
  );
}
