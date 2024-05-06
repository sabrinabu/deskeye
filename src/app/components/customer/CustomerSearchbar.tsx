"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { department, addDepartment } from "@/app/redux/customerSlice";
import { addCustomer, customer } from "@/app/redux/locationSlice";
import { addStatus } from "@/app/redux/statusSlice";

export default function CustomerSearchbar() {
  const dispatch = useDispatch();
  const [departmentData, setDepartmentData] = useState<department[]>([]);

  const [customerData, setCustomerData] = useState<customer[]>([]);
  const [locationData, setLocationData] = useState<location[]>([]);
  const firmid = useSelector((state: RootState) => state.departmentSlice._id);
  const departmentid = useSelector(
    (state: RootState) => state.customerSlice._id
  );
  const customerid = useSelector((state: RootState) => state.locationSlice._id);
  console.log("id" + departmentid);
  const status = useSelector((state: RootState) => state.statusSlice.open);
  console.log("status" + status);

  type location = {
    _id: Number;
    departmentid: Number;
    name: string;
    address: string;
  };

  const handleClickDepartment = (item: department) => {
    console.log(item);
    dispatch(addDepartment(item));
  };

  const handleClickCustomer = (item: customer) => {
    console.log(item);
    dispatch(addCustomer(item));
    if (customerData.length !== 0 && locationData.length !== 0) {
      dispatch(addStatus(true));
    }
  };

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/departments", { firmid: firmid })
        .then((res) => setDepartmentData(res.data.data));
    };
    handlegetdepartApi();
  }, [firmid]);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/customer", { departmentid: departmentid })
        .then((res) => setCustomerData(res.data.data));
    };
    handlegetdepartApi();
  }, [departmentid]);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/location", { customerid: customerid })
        .then((res) => setLocationData(res.data.data));
    };
    handlegetdepartApi();
  }, [customerid]);

  console.log(locationData);

  return (
    <div className="basis-[20%] border h-[calc(100vh-180px)]">
      <div className="flex flex-col">
        <select name="cars" id="cars">
          {departmentData?.map((item) => (
            <option value="volvo" onClick={() => handleClickDepartment(item)}>
              {item.name}
            </option>
          ))}
        </select>
        <input placeholder="searchbar" className="mt-4" />
        <p className="border-b mt-4 text-white">Kunden</p>
        {customerData.map((item) => (
          <span onClick={() => handleClickCustomer(item)}>{item.name}</span>
        ))}
        <p className="border-b mt-64 text-white">Ort</p>
        {locationData.map((item) => (
          <span>{item.address}</span>
        ))}
      </div>
    </div>
  );
}
