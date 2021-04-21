import React from "react"
import { FaBars } from "react-icons/fa"
import Home from "../Pages/Home"

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements"

const Sidebarabc = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={!isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="SignUp"></SidebarLink>
          <SidebarLink to="../Pages/Home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/ProductsCard" onClick={toggle}>
            Volunteering
          </SidebarLink>
          <SidebarLink to="Home" onClick={toggle}>
            Sign In
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/Sign">Sign Up</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebarabc
