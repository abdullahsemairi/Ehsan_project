import React, { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={!isOpen} toggle={toggle} />
      <h1>HOME</h1>
    </>
  )
}

export default Contact
