"use client";
import { nanoid } from "nanoid";
import Tablel from "@/app/components/Tablel";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

export type FormData = {
  key: string;
  shortfirmname: string;
  firmname: string;
  customernumber: number;
  isautomaticgenerate: boolean|string;
  address: string;
  telephonenumber: string;
  email: string;
  website: string;
  fax: string;
};

export default function Contactinformation() {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<FormData>();

  const onSubmit = (d) => {
    console.log(d);
  };
  let [AutomaticGenerateChecked, setAutomaticGenerateChecked] = useState(false);

  const [contacts, setContacts] = useState([
   
    {
      key: "1",
      shortfirmname: "hhhh",
      firmname: "asss",
      customernumber: 0,
      isautomaticgenerate: AutomaticGenerateChecked ? "ja" : "nain",
      address: "34 stre",
      telephonenumber: "012255",
      email: "ron@gmail",
      website: "ggg",
      fax: "022",
    },
  ]);
  const [selectionBehavior, setSelectionBehavior] = React.useState("toggle");

  console.log(AutomaticGenerateChecked);
  const [addFormData, setAddFormData] = useState<FormData>({
    key: "",
    shortfirmname: "",
    firmname: "",
    customernumber: 0,
    isautomaticgenerate: false,
    address: "",
    telephonenumber: "",
    email: "",
    website: "",
    fax: "",
  });
  //console.log(addFormData);

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newContact = {
      key: nanoid(),
      shortfirmname: addFormData.shortfirmname,
      firmname: addFormData.firmname,
      customernumber: addFormData.customernumber,
      isautomaticgenerate: addFormData.isautomaticgenerate,
      address: addFormData.address,
      telephonenumber: addFormData.telephonenumber,
      email: addFormData.email,
      website: addFormData.website,
      fax: addFormData.fax,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  //console.log(contacts);

  const handleAddFormChange = (event) => {
   
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldId = event.target.getAttribute("id");
    console.log(fieldId);

    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    newFormData[fieldId] = event.target.checked;

   if( newFormData[fieldId]===true){
    newFormData[fieldId]='ja';
   }
   else{
    newFormData[fieldId]='nein';
   }

    setAddFormData(newFormData);
  };
  console.log(addFormData)



  return (
    <div className="basis-[40%] bg-blue-950 p-2 text-white">
      <div className="bg-blue-500 max-h-[calc(100vh-3vh)] mt-14 flex flex-col">
        <span className="text-2xl mt-2 ml-14">Eine Neue Firma Hinzufugen</span>
        <span className="text-lg ml-14 ">Basisdaten</span>
        <form onSubmit={handleSubmit( handleAddFormSubmit)}>
          <div className="grid grid-cols-1  gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white">Firmaname Kurzberichung</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("shortfirmname", {
                  required: "Firmenname Kurzbezeichnung ist erforderlich",
                  minLength: { value: 3, message: "mindestens 3 Zeichen" },
                })}
                name="shortfirmname"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.shortfirmname?.message} </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">Firmaname</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("firmname", {
                  required: "Firmenname ist erforderlich",
                  minLength: { value: 3, message: "mindestens 3 Zeichen" },
                })}
                name="firmname"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.firmname?.message} </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="pl-2 ml-12 text-white text-sm">
                Kundennumber
              </span>
              <input
                className="w-44 p-1 ml-12  bg-slate-400 rounded"
                {...register("customernumber", {
                  pattern: {
                    value: /^\d{1,12}$/i,
                    message: "Ungültige Kundennummer",
                  },
                })}
                name="customernumber"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.customernumber?.message}</p>
            </div>
            <div className="flex gap-2 ml-20">
              <input
                type="checkbox"
                id="isautomaticgenerate"
                className=" bg-slate-400 rounded mt-4"
                {...register("isautomaticgenerate")}
                onChange={handleAddFormChange}
              />
              <span className="pl-2 text-white mt-6 text-sm">
                Automatic gerien
              </span>
            </div>
            <div className=""></div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">Adress</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("address", {
                  required:
                    "Addresse ist erforderlich (zB. Landstraße 16, 10787 Berlin)",
                  pattern: {
                    value:
                      /^[A-Za-z]([a-zäöüß\s\d.,-]+?)\s*([\d\s]+(?:\s?[-|+/]\s?\d+)?\s*[a-z]?)?\s*(\s)\s*(\d{1,5})\s*(,)\s*(\d{5})\s*(.+)?$/i,
                    message:
                      "Ungültige Adresse (zB. Landstraße 16, 10787 Berlin)",
                  },
                })}
                name="address"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.address?.message} </p>
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">Telefonnummer</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("telephonenumber", {
                  required: "Telephonenumber ist erforderlich",
                  pattern: {
                    value:
                      /^(\+?\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i,
                    message: "Ungültige Telefonnummer",
                  },
                })}
                name="telephonenumber"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.telephonenumber?.message} </p>
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">E-mail</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("email", {
                  required: "Email ist erforderlich",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Ungültige E-Mail Adresse",
                  },
                })}
                name="email"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.email?.message} </p>
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">Website</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("website", {
                  pattern: {
                    value:
                      /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
                    message: "Ungültige Website-Adresse",
                  },
                })}
                name="website"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.website?.message} </p>
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 gap-2">
            <div className="ml-12">
              <span className="pl-2 text-white text-sm">Fax</span>
            </div>
            <div className="ml-12 mr-5">
              <input
                className="w-full p-1 bg-slate-400 rounded"
                {...register("fax", {})}
                name="fax"
                onChange={handleAddFormChange}
              />
              <p className="text-red-500">{errors.fax?.message} </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-2 gap-2">
            <div className="ml-12 mr-5 mt-3 mb-9">
              <button
                className="w-full p-1 bg-green-700 rounded  text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
   
    </div>
  );
}
