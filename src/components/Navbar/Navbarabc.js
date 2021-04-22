// import { ToggleOff } from "@material-ui/icons"
import React from "react"
import { FaBars } from "react-icons/fa"
import { auth } from "../../firebase"
import DisplayName from "../displayName"
import displayName from "../displayName"
import ProfileImage from "../ProfileImage"
import ProfilePage from "../ProfilePage"
import "./Navbar.css"

import { Nav, NavLink, MobileIcon, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements"

const Navbarabc = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img className="imglogo" src={window.location.origin + "/LogoPNG.png"}></img>
        </NavLink>

        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/ProductsCard" activeStyle>
            Volunteering
          </NavLink>
          <NavLink to="/Linked-In" activeStyle>
            LinkedIn
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <DisplayName />
        <ProfileImage />
        <NavBtn>
          <NavBtnLink to="../Sign">Sign In</NavBtnLink>
        </NavBtn>

        <ProfilePage />
      </Nav>
    </>
  )
}

export default Navbarabc
