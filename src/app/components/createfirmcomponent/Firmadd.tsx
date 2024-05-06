"use client";

import React, { useState } from "react";
import FirmTable from "./FirmTable";

import EditFirmComponent from "./EditFirmComponent";
import { nanoid } from "nanoid";

export default function Firmadd() {
  const [contacts, setContacts] = useState([
    {
      key: "1",
      name: "sabrina",
      telephone: "017899",
      owner: "ja",
      email: "rina@gmail.com",
      organization: "ja",
      technical: "nain",
      security: "ja",
    },
  ]);

  const [addFormData, setAddFormData] = useState({
    name: "",
    telephone: "",
    owner: "nein",
    email: "",
    organization: "nein",
    technical: "nein",
    security: "nein",
  });
  //console.log(addFormData);

  const handleAddFormSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newContact = {
      key: nanoid(),
      name: addFormData.name,
      telephone: addFormData.telephone,
      owner: addFormData.owner,
      email: addFormData.email,
      organization: addFormData.organization,
      technical: addFormData.technical,
      security: addFormData.security,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  //console.log(contacts);

  const handleAddFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldId = event.target.getAttribute("id");
    console.log(fieldId);

    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    newFormData[fieldId] = event.target.checked;

    if (newFormData[fieldId] === true) {
      newFormData[fieldId] = "ja";
    } else {
      newFormData[fieldId] = "nein";
    }

    setAddFormData(newFormData);
  };
  console.log(addFormData);

  const [editFormData, setEditFormData] = useState({
    name: "",
    telephone: "",
    owner: "",
    email: "",
    organization: "",
    technical: "",
    security: "",
  });

  const [editContactId, setEditContactId] = useState(null);
  const [editFirmcomponent, setEditFirmcomponent] = useState(false);

  const handleEditClick = ( contact:any) => {
    //event.preventDefault();
    setEditContactId(contact.key);

    const formValues = {
      name: contact.name,
      telephone: contact.telephone,
      owner: contact.owner,
      email: contact.email,
      organization: contact.organization,
      technical: contact.technical,
      security: contact.security,
    };

    setEditFormData(formValues);
    setEditFirmcomponent(true);
  };
  console.log(editFormData);
  console.log(editContactId);

  const handleEditFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldId = event.target.getAttribute("id");
    console.log(fieldId);

    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    newFormData[fieldId] = event.target.checked;

    if (newFormData[fieldId] === true) {
      newFormData[fieldId] = "ja";
    }
    newFormData[fieldId] = "nein";

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      telephone: editFormData.telephone,
      owner: editFormData.owner,
      email: editFormData.email,
      organization: editFormData.organization,
      technical: editFormData.technical,
      security: editFormData.security,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex(
      (contact) => contact.key === editContactId
    );

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleDel = (id) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.key === id);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

 
  return (
    <div className="basis-[50%] bg-blue-950 h-screen p-2">   {editFirmcomponent ?  (
      <EditFirmComponent
        editFormData={editFormData}
        handleEditFormChange={handleEditFormChange}
        handleEditFormSubmit={handleEditFormSubmit}
        contacts={contacts} setContacts={setContacts}  handleDel={handleDel} handleEditClick={handleEditClick}
      />
    )   : (
      <div className="bg-blue-500 max-h-[calc(100vh-3vh)] mt-14 flex flex-col">
        <span className="text-lg ml-14 mt-6 text-white">Kontactinformation</span>
        <div className="border border-white mt-3">
    
            <form onSubmit={handleAddFormSubmit}>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="pl-2 ml-12 text-white text-sm">
                    Ansprechenparten:Name,Vorname
                  </span>
                  <input
                    name="name"
                    className="w-96 p-1 ml-12  bg-slate-400 rounded"
                    onChange={handleAddFormChange}
                  />
                </div>
                <div className="flex gap-2 ml-48">
                  <input
                    id="owner"
                    type="checkbox"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleAddFormChange}
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
                    onChange={handleAddFormChange}
                  />
                </div>
                <div className="col-start-2 start-0">
                  <span className="pl-2 ml-12 text-white text-sm">E-mail</span>
                  <input
                    name="email"
                    className="p-1 ml-12 w-44 bg-slate-400 rounded"
                    onChange={handleAddFormChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-2">
                <div className="flex gap-2 ml-12">
                  <input
                    id="organization"
                    type="checkbox"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleAddFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">
                    Organization
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <input
                    id="technical"
                    type="checkbox"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleAddFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">
                    Technical
                  </span>
                </div>
                <div className="flex gap-2 ml-12">
                  <input
                    id="security"
                    type="checkbox"
                    className=" bg-slate-400 rounded mt-4"
                    onChange={handleAddFormChange}
                  />
                  <span className="pl-2 text-white mt-5 text-sm">Security</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2">
                <button
                  className="w-80 p-1 bg-green-700 rounded  text-white ml-2"
                  type="submit"
                >
                  Save
                </button>
      
              </div>
            </form>
         
          <FirmTable contacts={contacts} setContacts={setContacts}  handleDel={handleDel} handleEditClick={handleEditClick}/>
         
        </div>
      </div>)}
    </div>
  
  );
}
