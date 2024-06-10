'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Api() {
    const[firm, setFirm]=useState();
    const[department, setDepartment]=useState();
    const[customer, setCustomer]=useState();
    const[location, setLocation]=useState();
    const[locationdetail, setLocationdetail]=useState();

      useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .get("/api/firm", )
        .then((res) => setFirm(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/department", {firmid:169})
        .then((res) => setDepartment(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/customer", {departmentid:210})
        .then((res) => setCustomer(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/location", {customerid:310})
        .then((res) => setLocation(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/locationdetails", {locationid:410})
        .then((res) => setLocationdetail(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  console.log("firm"+ firm)
  console.log("department"+ department)
  console.log("customer"+ customer)
  console.log("location"+ location)
  console.log("locationdetail"+ locationdetail)
  return (
    <div>Api</div>
  )
}

