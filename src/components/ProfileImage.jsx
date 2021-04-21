import React, { useContext } from "react"
import { UserContext } from "../providers/UserProvider"
import { navigate } from "@reach/router"
import { auth } from "../firebase"
import Home from "./Pages/Home"
const ProfileImage = () => {
  const user = useContext(UserContext)
  console.log(user)
  const { photoURL, displayName, email } = user

  return (
    <div
      style={{
        background: `url(${photoURL || ""})  no-repeat center center`,
        backgroundSize: "cover",
        height: "60px",
        width: "60px",
        borderRadius: "100%",
      }}
    ></div>
  )
}

export default ProfileImage
