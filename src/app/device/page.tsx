"use client";

import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Rightside from "../components/Rightside";
import { usePathname } from "next/navigation";

export default function page() {
  const pageFullUrl = usePathname();
  console.log(pageFullUrl);
  console.log(pageFullUrl.substring(1));
  return (
    <div>
      <Header />
      <div className="flex flex-row mt-3">
        <Sidebar />
        <Rightside pageFullUrl={pageFullUrl.substring(1)} />
      </div>
    </div>
  );
}
