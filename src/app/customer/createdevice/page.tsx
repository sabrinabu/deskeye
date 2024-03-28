"use client";
import CreateDevice from "@/app/components/CreateDevice";
import CustomerRightbar from "@/app/components/CustomerRightbar";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pageFullUrl = usePathname();
  return (
    <div>
      {" "}
      <Header />
      <div className="flex flex-row mt-3">
        <Sidebar />
        <CreateDevice pageFullUrl={pageFullUrl.substring(1)} />
      </div>
    </div>
  );
}
