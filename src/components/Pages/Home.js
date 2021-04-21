import React, { useState } from "react"
import Navbarabc from "../Navbar/Navbarabc"
import Sidebarabc from "../Sidebar/Sidebarabc"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbarabc toggle={toggle} />
      <Sidebarabc isOpen={!isOpen} toggle={toggle} />
      <article>
        <div>
          <img src={process.env.PUBLIC_URL + "/1.png"} width="100%" height="50%" alt="firstlogo" className="Header" />
        </div>

        <div className="img-box">
          <img
            src={process.env.PUBLIC_URL + "/2.png"}
            width="100%"
            height="50%"
            alt="secondtlogo"
            className="AboutUs"
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/3.png"}
            width="100%"
            height="50%"
            alt="secondtlogo"
            className="AboutUs"
          />
        </div>
      </article>
    </>
  )
}

export default Home
