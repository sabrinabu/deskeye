"use client";
import { AppWindow, CircleHelp, FilePenLine, RotateCw } from "lucide-react";
import React from "react";
import { Tooltip } from "@nextui-org/react";

import CustomerSearchbar from "./CustomerSearchbar";
import CustomerTable from "./CustomerTable";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
type urlProps = {
  pageFullUrl: string;
};

export default function CustomerRightbar({ pageFullUrl }: urlProps) {
  const status = useSelector((state: RootState) => state.statusSlice.open);
  console.log("status" + status);
  return (
    <div className="basis-[84%] bg-blue-500 h-[calc(100vh-60px)] p-2">
      <div className="mt-2 text-white ms-2 text-xl"> {pageFullUrl}</div>
      <div className="flex justify-between">
        <div className="flex mt-2 gap-3">
          <div className="flex border px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded h-12 shadow-lg justify-center">
            {" "}
            <span>
              {" "}
              <FilePenLine />
            </span>
            <span className="text-center">Kunden bearbeiten</span>
          </div>
          <div className="flex border px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded h-12 shadow-lg justify-center">
            {" "}
            <span>
              {" "}
              <FilePenLine />
            </span>
            <span className="text-center">Kunden bearbeiten</span>
          </div>
          <div className="flex border px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded h-12 shadow-lg justify-center">
            {" "}
            <span>
              {" "}
              <FilePenLine />
            </span>
            <span className="text-center">Kunden bearbeiten</span>
          </div>
          <div className="flex border px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded h-12 shadow-lg justify-center">
            {" "}
            <span>
              {" "}
              <FilePenLine />
            </span>
            <span className="text-center">Kunden bearbeiten</span>
          </div>
          <div className="flex border px-2 py-2 bg-slate-500 border-t-4 border-green-400 rounded h-12 shadow-lg justify-center">
            {" "}
            <span>
              {" "}
              <FilePenLine />
            </span>
            <span className="text-center">Kunden bearbeiten</span>
          </div>
        </div>
        <div className="flex mt-2 gap-3 mr-3">
          <div className="w-9 h-8 bg-sky-200 rounded text-center px-1 py-1 realtive group">
            <RotateCw />
          </div>

          <span className="w-9 h-8 bg-sky-200 rounded text-center px-1 py-1">
            <AppWindow />
          </span>
          <span className="w-9 h-8 bg-sky-200 rounded text-center px-1 py-1">
            <CircleHelp />
          </span>
        </div>
      </div>
      <div className="flex mt-4">
        <CustomerSearchbar />
        {status && <CustomerTable />}
      </div>
    </div>
  );
}
