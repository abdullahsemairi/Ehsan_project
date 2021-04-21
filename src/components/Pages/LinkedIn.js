import React, { useState } from "react"
import HeaderPage from "../HeaderPage"
import Navbarabc from "../Navbar/Navbarabc"
import Sidebarabc from "../Sidebar/Sidebarabc"

const LinkedIn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbarabc toggle={toggle} />
      <Sidebarabc isOpen={!isOpen} toggle={toggle} />
      <HeaderPage />
    </>
  )
}

export default LinkedIn
