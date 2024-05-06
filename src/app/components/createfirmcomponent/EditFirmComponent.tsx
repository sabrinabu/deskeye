import React, { useState } from "react";
import Firmadd from "./Firmadd";
import FirmTable from "./FirmTable";

type editProps = {
  editFormData: Object;
  handleEditFormChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditFormSubmit: (event: React.FormEvent<HTMLInputElement>) => void;
  contacts: Object[];
  handleDel: (num: string) => void;
  handleEditClick: (contact: any) => void;
  setContacts: any;
};

export default function EditFirmComponent({
  editFormData,
  handleEditFormChange,
  handleEditFormSubmit,
  contacts,
  handleDel,
  handleEditClick,
  setContacts,
}: editProps) {
  console.log(editFormData);

  const [backpage, setBackpage] = useState(false);
  const handleBack = () => {
    setBackpage(true);
  };
  return (
    <div className="basis-[50%] bg-blue-950 h-screen p-2">
      {" "}
      {backpage ? (
        <Firmadd />
      ) : (
        <div className="bg-blue-500 max-h-[calc(100vh-3vh)] mt-14 flex flex-col">
          <span className="text-lg ml-14 mt-6 text-white">
            Kontactinformation
          </span>
          <div className="border border-white mt-3">
            <form onSubmit={handleEditFormSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="pl-2 ml-12 text-white text-sm">
                    Ansprechenparten:Name,Vorname
                  </span>
                  <input
                    name="name"
                    value={editFormData?.name}
                    className="w-96 p-1 ml-12  bg-slate-400 rounded"
                    onChange={handleEditFormChange}
                  />
                </div>
                <div className="flex gap-2 ml-48">
                  <input
                    type="checkbox"
                    id="owner"
                    className=" bg-slate-400 rounded mt-4"
                  />
                  <span className="pl-2 text-white mt-6 text-sm">
                    Geschäftfüher
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <div>
                  <span className="pl-2 ml-12 text-white text-sm">
                    Telefonnumber
                  </span>
                  <input
                    name="telephone"
                    className="w-44 p-1 ml-12  bg-slate-400 rounded"
                    value={editFormData?.telephone}
                    onChange={handleEditFormChange}
                  />
                </div>
                <div className="col-start-2 start-0">
                  <span className="pl-2 ml-12 text-white text-sm">E-mail</span>
                  <input
                    name="email"
                    className="p-1 ml-12 w-44 bg-slate-400 rounded"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="flex gap-2 ml-12">
                  <input
                    type="checkbox"
                    id="orgnization"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleEditFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">
                    Orgnization
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <input
                    type="checkbox"
                    id="technical"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleEditFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">
                    Technical
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <input
                    type="checkbox"
                    id="security"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleEditFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">Security</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  className="w-80 p-1 bg-green-700 rounded  text-white ml-2 "
                  type="submit"
                >
                  Update
                </button>
                <button
                  className="w-80 p-1 bg-green-700 rounded  text-white"
                  onClick={handleBack}
                >
                  Ignore Selection
                </button>
              </div>
            </form>

            <FirmTable
              contacts={contacts}
              setContacts={setContacts}
              handleDel={handleDel}
              handleEditClick={handleEditClick}
            />
          </div>
        </div>
      )}
    </div>
  );
}
