import React, { useState } from "react"
import UserProvider from "../providers/UserProvider"
import Application from "./Application"
import Navbarabc from "./Navbar/Navbarabc"
import Sidebarabc from "./Sidebar/Sidebarabc"

const Sign = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbarabc toggle={toggle} />
      <Sidebarabc isOpen={!isOpen} toggle={toggle} />

      <UserProvider>
        <Application />
      </UserProvider>
    </div>
  )
}
export default Sign
