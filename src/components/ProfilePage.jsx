import React, { useContext } from "react"
import { UserContext } from "../providers/UserProvider"
import { Link, navigate } from "@reach/router"
import { auth } from "../firebase"
import Home from "./Pages/Home"
import "./SignOut.css"
const ProfilePage = () => {
  const user = useContext(UserContext)
  //console.log(user)
  const { photoURL, displayName, email } = user

  return (
    <button
      className="signout"
      href="/"
      onClick={() => {
        auth.signOut()
      }}
    >
      .
    </button>
  )
}

export default ProfilePage
