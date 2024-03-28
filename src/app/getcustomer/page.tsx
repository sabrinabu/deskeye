"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {
  const [photos, setPhotos] = useState([]);
  /*useEffect(() => {
    fetch("/api/departments", { firmId: 130 })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
      });
  }, []);*/

  useEffect(() => {
    axios
      .post("/api/departments", { firmid: 169 })
      .then((res) => console.log(res));
  }, []);
  console.log(photos);
  return <div>page</div>;
}
