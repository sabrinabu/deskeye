import React from "react";

export default function CustomerSearchbar() {
  return (
    <div className="basis-[20%] border h-[calc(100vh-180px)]">
      <div className="flex flex-col">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <input placeholder="searchbar" className="mt-4"/>
        <p className="border-b mt-4 text-white">Kunden</p>
        <p className="border-b mt-64 text-white">Ort</p>
      </div>
    </div>
  );
}
