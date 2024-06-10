"use client";
import { addCustomer5, addCustomername } from "@/app/redux/controlsidebarSlice";
import { addCustomerId, addLocationId } from "@/app/redux/departmentSlice";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Customer() {
  const [customer, setCustomer] = useState([]);
  const [location, setLocation] = useState(["hamburg"]);
  const [adjustkey, setAdjustkey] = useState();
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const router = useRouter();
  const [paramValue, setParamValue] = useState(
    searchParams.get("firmid") || ""
  );
  const customerid = useSelector(
    (state: RootState) => state.departmentSlice.customerId
  );

  const departmentid = useSelector(
    (state: RootState) => state.departmentSlice.departmentId
  );
  console.log(customerid);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/customer", { departmentId: departmentid })
        .then((res) => setCustomer(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/location", { customerid: customerid })
        .then((res) => setLocation(res.data.data));
    };
    handlegetdepartApi();
  }, []);
  console.log(location)

  const handleCustomerId = (id, key) => {
    dispatch(addCustomerId(id));
    setAdjustkey(key);
    setParamValue(id);
    console.log("hello")
  };

  const updateUrl = (id, name) => {
    const params = new URLSearchParams(searchParams);
    params.set("customerid", paramValue);
    router.push(`/root/firm/departments/customer?${params.toString()}`);
    dispatch(addLocationId(id));
    dispatch(addCustomername(name));
    dispatch(addCustomer5(name))
  };
  return (
    <div className="basis-[84%] bg-blue-500 h-screen p-2">
      <button type="button" onClick={() => router.back()}>
      Click here to go back
    </button>
      <div className="flex flex-col ml-7 mt-8 gap-5">
        {customer?.map((cus, key) => (
          <div className="flex justify-between gap-2">
            <span className="" onClick={() => handleCustomerId(cus._id, key)}>
              {cus.name}
            </span>

            <div className="mt-4 flex ml-1">
              {location?.map((i) => (
                <div
                  className={`mb-4 mr-10 flex ${
                    key === adjustkey ? "text-white" : "hidden"
                  }`}
                  onClick={() => updateUrl(i._id, cus.name)}
                >
                  {i.address}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
