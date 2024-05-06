import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Contactinformation from '../components/createfirmcomponent/Contactinformation'
import Firmadd from '../components/createfirmcomponent/Firmadd'

export default function page() {
  return (
    <div>
    <Header />
    <div className="flex flex-row">
      <Sidebar />
    <Contactinformation/>
      <Firmadd/>
    </div>
  </div>
  )
}
