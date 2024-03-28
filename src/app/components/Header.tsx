"use client";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div className="flex h-60px bg-sky-600">
      <div className="basis-1/4 px-2">
        <Image src="/icon.png" width={85} height={80} alt="" />
      </div>
      <div className="basis-1/2">
        <input
          className="w-full outline-none h-7 mt-1 rounded bg-blue-300"
          type="text"
          placeholder="Search here"
        />
      </div>
      <div className="basis-1/2 flex justify-end gap-3">
        <div className="mr-16">
          <div
            onClick={() => setOpen(!open)}
            className="bg-sky-200 rounded shadow-md mt-1 mb-1 w-9 h-7 px-2 py-0"
          >
            <Plus />
            {open && (
              <div className="absolute z-20 flex flex-col mt-1 right-32 border border-red-200 w-44">
                <span className="flex justify-center bg-sky-400 rounded mt-1 ml-2 mr-2">
                  <span>
                    <Plus />
                  </span>
                  <Link href="/customer/createlocation">
                    <span>Ort Hinzufugen</span>
                  </Link>
                </span>
                <span className="flex justify-center bg-sky-400 rounded ml-2 mr-2 mt-1">
                  <span>
                    <Plus />
                  </span>
                  <Link href="/customer/createcustomer">
                    <span className="text-sm">Kunde Hinzufugen</span>
                  </Link>
                </span>
                <span className="flex justify-center bg-sky-400 rounded ml-2 mr-2 mt-1 mb-0">
                  <span>
                    <Plus />
                  </span>
                  <Link href="/customer/createdevice">
                    <span className="text-sm">Geräte Hinzufugen</span>
                  </Link>
                </span>
                <span className="flex justify-center bg-sky-400 rounded ml-2 mr-2 mt-1">
                  <span>
                    <Plus />
                  </span>
                  <span>Ort Hinzufugen</span>
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="mr-7">jj</div>
      </div>
    </div>
  );
}
