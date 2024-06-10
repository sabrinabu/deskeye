"use client";
import { addCustomername } from "@/app/redux/controlsidebarSlice";
import {
  addCustomerId,
  addDepartmentId,
  addLocationdetail,
  addLocationdetailId,
  addMoreSidebar,
} from "@/app/redux/departmentSlice";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

 type location = {
  _id: number;
  customerid: number;
  address: string;
};

type locationdetails = {
  _id: number;
  locationid:  number;
   name:  string;
   amount: number;
};

export default function Department() {
  const [locationdetail, setLocationdetail] = useState<locationdetails[]>();
  const [location, setLocation] = useState<location[]>();
  const [adjustkey, setAdjustkey] = useState();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paramValue, setParamValue] = useState(
    searchParams.get("firmid") || ""
  );

  const pathname = usePathname();

  const dispatch = useDispatch();
  //console.log(pathname)

  const customerid = useSelector(
    (state: RootState) => state.departmentSlice.customerId
  );

  const locationid = useSelector(
    (state: RootState) => state.departmentSlice.locationId
  );

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/location", { customerid: customerid })
        .then((res) => setLocation(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/locationdetails", { locationid: locationid })
        .then((res) => setLocationdetail(res.data.data));
    };
    handlegetdepartApi();
  }, []);
  //console.log(customer)

  const handleLocationmentId = (id, key) => {
    dispatch(addCustomerId(id));
    setAdjustkey(key);
    setParamValue(id);
  };

  const updateUrl = (name) => {
    const params = new URLSearchParams(searchParams);
    params.set("departmentId", paramValue);
    //router.push(`/root/firm/departments?${params.toString()}`);
    dispatch(addLocationdetail(locationdetail.map((i) => i)));
    dispatch(addCustomername(name));
    dispatch(addMoreSidebar(true));
  };

  console.log(location);
  return (
    <div className="basis-[84%] bg-blue-500 h-screen p-2">
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>

      <div className="flex flex-col ml-7 mt-5 gap-5">
        {location?.map((i, key) => (
          <div className="flex justify-between gap-2">
            <span className="" onClick={() => handleLocationmentId(i._id, key)}>
              {i.address}
            </span>

            <div className="mt-4 flex ml-1 bg-red-300">
              {locationdetail?.map((j) => (
                <div
                  className={`mb-4 mr-10 flex ${
                    key === adjustkey ? "text-white" : "hidden"
                  }`}
                  onClick={() => updateUrl(i.address)}
                >
                  {j.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
