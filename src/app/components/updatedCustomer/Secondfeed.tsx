'use client'

import { addCustomername, addId, addRole, addSidebar } from "@/app/redux/controlsidebarSlice";
import { customer } from "@/app/redux/locationSlice";
import { RootState } from "@/app/redux/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
type departmentIdProps = {
  
  feedopen:boolean;
};

export default function Secondfeed({ feedopen }: departmentIdProps) {

  const dispatch = useDispatch();
  const id = useSelector(
    (state: RootState) => state.controlsidebarSlice.number
  );
  console.log(id);
  const router = useRouter()
  const [customerData, setCustomerData] = useState<customer[]>([]);
  const [customerid, setCustomerid] = useState<Number>();
  const [customerdetail, setCustomerdetail] = useState([]);
  const [sidebar, setsidebar] = useState(false);
  const [adjustkey, setadjustkey] = useState();
  //const[customername, setcustomername]=useState();

  //console.log(sidebar)

  const customername = useSelector(
    (state: RootState) => state.controlsidebarSlice.name
  );

  const handleId = (id, key,name ) => {
    setCustomerid(id);
    setadjustkey(key);

    dispatch(addId(id));
    dispatch(addCustomername(name));
    dispatch(addRole("nothing"));
    handleCustomerChild(name)

  };

  const handleClick = () => {
    setsidebar(!sidebar);
    dispatch(addSidebar(sidebar));
  };
  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/departmentcustomer", { departmentid: 310 })
        .then((res) => setCustomerData(res.data.data));
    };
    handlegetdepartApi();
  }, []);

  useEffect(() => {
    const handlegetdepartApi = async () => {
      const result = await axios
        .post("/api/customerdetails", { customerid: 130 })
        .then((res) => setCustomerdetail(res.data.data));
    };
    handlegetdepartApi();
  }, [customerid]);
  // console.log(customerid);
  // console.log(customerdetail);

  const handleCustomerChild=(name)=>{
    dispatch(addCustomername(name));
    router.push(`/updatecustomer/${customername}/${customername}`)

  }

  return (
    <div className="basis-[84%] bg-blue-500 h-screen p-2">
      <div className="ml-5 text-white underline mt-6">Kunden</div>
      <div className="flex flex-col ml-7 mt-5 gap-5">
        {feedopen && customerData?.map((customer, key) => (
          <div className="flex justify-between gap-2">
            <span
              className=""
              onClick={() => handleId(customer._id, key, customer.name)}
              onDoubleClick={handleClick}
            >
              {customer.name}
            </span>

            <div className="mt-4 flex ml-1">
              {customerdetail
                ?.filter((item) => item.customerid === customerid)
                .map((i) => (
                  <div
                    className={`mb-4 mr-10 flex ${
                      key === adjustkey ? "text-white" : "hidden" 
                    }`}
                    onClick={()=>handleCustomerChild(i.name)}
                  >
                    {i.name} {i.amount}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
