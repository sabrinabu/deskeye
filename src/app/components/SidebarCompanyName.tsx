"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function SidebarCompanyName() {
  const [datas, setDatas] = useState([]);
  const firm = useSelector((state: RootState) => state.departmentSlice.name);
  console.log(firm)

  useEffect(() => {
    fetch("/api/firm")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDatas(data.data);
      });
  }, []);
  console.log(Array.isArray(datas));
  return (
    <div>
      <select>
        {datas.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}
