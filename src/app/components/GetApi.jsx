"use client"

import React, { useEffect } from 'react'

export default function GetApi() {

    const [photos, setPhotos] = useState([]);
    useEffect(() => {
      fetch("/api/customer")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPhotos(data);
        });
    }, []);
  return (
    <div>GetApi</div>
  )
}
