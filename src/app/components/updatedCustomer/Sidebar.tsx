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
import SidebarCompanyName from "@/app/components/customer/SidebarCompanyName";
import { department } from "@/app/redux/customerSlice";
import axios from "axios";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Secondfeed from "./Secondfeed";
import { useRouter } from "next/navigation";
import { addCustomername, addRole, addStarttraker } from "@/app/redux/controlsidebarSlice";
import Firm from "./Firm";
import Department from "./Department";
import { Texturina } from "next/font/google";
import Api from "./Api";
import Customer from "./Customer";
import Location from "./Location";

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openComponent, setOpenComponent] = useState("firm");

  const [departmentData, setDepartmentData] = useState<department[]>([]);
  const [departmentId, setDepartmentId] = useState<number>(210);
  const [customerdetail, setCustomerdetail] = useState([]);
  const[customernameincrease, setCustomernameincrease]=useState<boolean>()
  const[customernamedecrase, setCustomernamedecrase]=useState<boolean>()

  const pageFullUrl = usePathname();

  const colornav = pageFullUrl.split("/");
  console.log(colornav.length)
  let starttraker = useSelector(
    (state: RootState) => state.controlsidebarSlice.startnumber
  );
  const customername3 = useSelector(
    (state: RootState) => state.controlsidebarSlice.customername3
  );


  useEffect(()=>{
     starttraker
    if(starttraker<colornav.length){
      setCustomernameincrease(true)
      dispatch(addStarttraker(starttraker++))
      console.log("I am here normal"+ starttraker)
    }
    else if(starttraker>=colornav.length){
      setCustomernameincrease(false)
      setCustomernamedecrase(true)
      dispatch(addStarttraker(starttraker--))
      console.log("I am here"+starttraker)
    }
   

  },[colornav.length])

  const id = useSelector(
    (state: RootState) => state.controlsidebarSlice.number
  );
  const sidebaropen = useSelector(
    (state: RootState) => state.controlsidebarSlice.open
  );
  const customername = useSelector(
    (state: RootState) => state.controlsidebarSlice.name
  );
  //console.log(customername);

  const locationdetail = useSelector(
    (state: RootState) => state.departmentSlice.locationdetail
  );
  //console.log(locationdetail)
  //console.log(customername);
  const role = useSelector(
    (state: RootState) => state.controlsidebarSlice.role
  );
 // console.log(role[0]);

  
  const addMoreSidebar = useSelector(
    (state: RootState) => state.departmentSlice.isaddMoreSidebar
  );

  



  const customername4 = useSelector(
    (state: RootState) => state.controlsidebarSlice.customername4
  );
  console.log('customername4'+customername4)
  const customername5 = useSelector(
    (state: RootState) => state.controlsidebarSlice.customername5
  );
  console.log(customername5)
  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/departments", { firmid: 130 })
        .then((res) => setDepartmentData(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  const handleDepartmentId = (id) => {
    setDepartmentId(id);
  };
  console.log(customerdetail);

  const handleClick = () => {
    // setFeedopen(true);
    router.push("root/firm");
    dispatch(addCustomername("firm"));
    dispatch(addRole("nothing"));
  };

  useEffect(() => {
    if (colornav[2] == "firm") {
      setOpenComponent("department");
    }
    if (colornav[3] == "departments") {
      setOpenComponent("customer");
      console.log("I love you");
    }
    if (colornav[4] == "customer") {
      setOpenComponent("location");
    }
    if (colornav[5] == "location") {
      setOpenComponent("locationdisplay");
    }
  }, []);

  return (
    <>
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
                <span className="bg-blue-800 h-10 px-6 rounded-md py-2 mt-2 ml-6">
                  Standard
                </span>
                <span className="bg-blue-800 h-10 px-6 rounded-md py-2 mt-1 ml-6">
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
            {colornav.length==2&& 'root'}
            {colornav.length==3? customername3:""}
            {colornav.length==4? customername4:""}
            {colornav.length==5? customername5:""}
          
   
          </div>

          {addMoreSidebar && (
            <div className="flex gap-2 bg-blue-500 h-10 px-3 rounded-md py-2">
              <span>
                <Users />
              </span>

              <span className="flex flex-col">{locationdetail.map((i)=>i.name)}</span>
            </div>
          )}

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

      {openComponent == "firm" && <Firm />}
      {openComponent == "department" && <Department />}
      {openComponent == "customer" && <Customer />}
      {openComponent == "location" && <Location />}
    </>
  );
}
