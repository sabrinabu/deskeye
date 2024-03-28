"use client";

import {
  ArrowBigDown,
  BellRing,
  FolderKanban,
  KeySquare,
  LaptopMinimal,
  MonitorSmartphone,
  Settings,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import SidebarCompanyName from "./SidebarCompanyName";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pageFullUrl = usePathname();
  console.log(pageFullUrl.split("/"));
  const colornav = pageFullUrl.split("/");

  

  return (
    <div className="basis-[16%] p-4 bg-blue-950 h-screen">
      <div className="flex justify-between gap-2 mt-2">
        <span className="bg-red-600 w-9 h-7 text-center rounded shadow-lg shadow-indigo-500/40 ">
          2
        </span>
        <span className="bg-yellow-600 w-9 h-7 text-center rounded shadow-lg shadow-indigo-500/40">
          55
        </span>
        <span className="bg-red-600 w-9 h-7  text-center rounded shadow-lg shadow-indigo-500/40">
          22
        </span>
        <span className="bg-red-600 w-9 h-7  text-center rounded shadow-lg shadow-indigo-500/40">
          55
        </span>
        <span className="bg-green-600 w-9 h-7 text-center rounded shadow-lg shadow-indigo-500/40">
          859
        </span>
      </div>
      <div className="flex flex-col mt-3 gap-2">
        <div className="flex flex-col">
          <div
            className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2"
            onClick={() => setOpen(!open)}
          >
            <span>
              <MonitorSmartphone />
            </span>
            <span>Dashbroad</span>
            <span>
              <ArrowBigDown />
            </span>
          </div>
          {open && (
            <>
              <span className="bg-blue-800 h-10 px-3 rounded-md py-2 mt-2">
                Standard
              </span>
              <span className="bg-blue-800 h-10 px-3 rounded-md py-2 mt-1">
                Benuzt
              </span>
            </>
          )}
        </div>
        <div
          className={`flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2 ${
            colornav[1] === "customer" ? "bg-green-600" : ""
          }`}
        >
          <span>
            <Users />
          </span>
          <Link href="/customer">
            <span>Kunden</span>
          </Link>
        </div>
        <div
          className={`flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2 ${
            colornav[1] === "device" ? "bg-green-600" : ""
          }`}
        >
          <span>
            <LaptopMinimal />
          </span>
          <Link href="/device">
            <span>Geräte</span>
          </Link>
        </div>
        <div className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2">
          <span>
            <BellRing />
          </span>
          <span>Hinwise</span>
        </div>
        <div className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2">
          <span>
            <FolderKanban />
          </span>
          <span>Arbeitsplan</span>
        </div>
        <div className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2">
          <span>
            <Settings />
          </span>
          <span>Einstellungen</span>
        </div>
        <div className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2">
          <span>
            <KeySquare />
          </span>
          <span>Ausloggin</span>
        </div>
      </div>
      <div className="mt-28">
        {pageFullUrl.substring(1) === "customer" && <SidebarCompanyName />}
      </div>
    </div>
  );
}
