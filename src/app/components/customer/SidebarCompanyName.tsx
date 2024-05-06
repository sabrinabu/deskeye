"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firm } from "@/app/redux/departmentSlice";
import { addFirm } from "@/app/redux/departmentSlice";
import { RootState } from"@/app/redux/store";

export default function SidebarCompanyName() {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState<firm[]>();
  const[firmdetail, setFirmdetail]=useState<firm>()
  console.log(firmdetail)
  const firmname = useSelector((state: RootState) => state.departmentSlice.name);

  const handleClick = (item:firm) => {
    dispatch(addFirm(item));
  };

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
        {datas?.map((item) => (
          <option value={item.name} onClick={() =>handleClick(item)} className="bg-slate-200 hover:bg-sky-700 ">{item.name}</option>
        ))}
      </select>
    </div>
  );
}
