import React, { useContext } from "react"
import { UserContext } from "../providers/UserProvider"
import { navigate } from "@reach/router"
import { auth } from "../firebase"
import Home from "./Pages/Home"
const DisplayName = () => {
  const user = useContext(UserContext)
  console.log(user)
  const { photoURL, displayName, email } = user

  return <p className="text-xl font-semibold">{displayName}</p>
}

export default DisplayName
