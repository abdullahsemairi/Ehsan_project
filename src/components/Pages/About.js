import React, { useState } from "react"
import Navbar from "../Navbar/Navbarabc"
import Sidebar from "../Sidebar/Sidebarabc"
import { Link } from "@reach/router"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ProductsCards from "../ProductsCards"

const About = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={!isOpen} toggle={toggle} />
      <h1>ABOUT</h1>
      <ProductsCards />
    </>
  )
}

export default About
