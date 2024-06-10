"use client";
import { addCustomer4, addCustomername } from "@/app/redux/controlsidebarSlice";
import { addCustomerId, addDepartmentId } from "@/app/redux/departmentSlice";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Department() {
  const [department, setDepartment] = useState(["hello", "kelo"]);
  const [customer, setCustomer] = useState([]);
  const [adjustkey, setAdjustkey] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paramValue, setParamValue] = useState(
    searchParams.get("firmid") || ""
  );

  const pathname = usePathname();

  const dispatch = useDispatch();
  //console.log(pathname)

  const firmid = useSelector(
    (state: RootState) => state.departmentSlice.firmId
  );

  const departmentid = useSelector(
    (state: RootState) => state.departmentSlice.departmentId
  );

  //console.log(firmid)
  //console.log(departmentid)

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/departments", { firmid: firmid })
        .then((res) => setDepartment(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/customer", { departmentId: departmentid })
        .then((res) => setCustomer(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  //console.log(customer)

  const handleDepartmentId = (id, key) => {
    dispatch(addDepartmentId(id));
    setAdjustkey(key);
    setParamValue(id);
  };

  const updateUrl = (id, name) => {
    const params = new URLSearchParams(searchParams);
    params.set("departmentId", paramValue);
    router.push(`/root/firm/departments?${params.toString()}`);
    dispatch(addCustomerId(id));
    dispatch(addCustomername(name));
    dispatch(addCustomer4(name));
  };
  return (
    <div className="basis-[84%] bg-blue-500 h-screen p-2">
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

      <div className="flex flex-col ml-7 mt-5 gap-5">
        {department?.map((depart, key) => (
          <div className="flex justify-between gap-2">
            <span
              className=""
              onClick={() => handleDepartmentId(depart._id, key)}
            >
              {depart.name}
            </span>

            <div className="mt-4 flex ml-1">
              {customer?.map((i) => (
                <div
                  className={`mb-4 mr-10 flex ${
                    key === adjustkey ? "text-white" : "hidden"
                  }`}
                  onClick={() => updateUrl(depart._id, depart.name)}
                >
                  {i.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
