"use client";
import { addCustomer3, addCustomername } from "@/app/redux/controlsidebarSlice";
import { addFirmId } from "@/app/redux/departmentSlice";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Firm() {
  const [firmname, setFirmname] = useState([]);
  const [adjustkey, setAdjustkey] = useState();
  const [companyname, setCompanyname] = useState();
  const [department, setDepartment] = useState(["hello", "kelo"]);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paramValue, setParamValue] = useState(
    searchParams.get("firmid") || ""
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .get("/api/firm")
        .then((res) => setFirmname(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  //console.log(firmname)

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/departments", { firmid: paramValue })
        .then((res) => setDepartment(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  //console.log(department)

  /* useEffect(() => {
    setParamValue(searchParams.get('firmid') || '');
  }, [searchParams  ]);*/

  const updateUrl = (id, name) => {
    const params = new URLSearchParams(searchParams);
    params.set("firmid", paramValue);
    router.push(`/root/firm?${params.toString()}`);
    dispatch(addFirmId(id));
    dispatch(addCustomername(name));
    dispatch(addCustomer3(name));
  };

  const handleId = (id, key, name) => {
    setParamValue(id);
    setAdjustkey(key);
    setCompanyname(name);
  };
  return (
    <div className="basis-[84%] bg-blue-500 h-screen p-2">
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <div className="flex flex-col ml-7 mt-5 gap-5">
        {firmname?.map((Firm, key) => (
          <div className="flex justify-between gap-2">
            <span
              className=""
              onClick={() => handleId(Firm._id, key, Firm.name)}
            >
              {Firm.name}
            </span>

            <div className="mt-4 flex ml-1">
              {department.map((i) => (
                <div
                  className={`mb-4 mr-10 flex ${
                    key === adjustkey ? "text-white" : "hidden"
                  }`}
                  onClick={() => updateUrl(Firm._id, Firm.name)}
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
