import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { functions } from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA2lEYNij8xm1eagu_Itn3EoTeJspDYWtw",
  authDomain: "project-69b12.firebaseapp.com",
  databaseURL: "https://project-69b12-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-69b12",
  storageBucket: "project-69b12.appspot.com",
  messagingSenderId: "442302066390",
  appId: "1:442302066390:web:065c30931d3053c24d2377",
  measurementId: "G-QPTSJYH9NM",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return

  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      })
    } catch (error) {
      console.error("Error creating user document", error)
    }
  }
  return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()

    return {
      uid,
      ...userDocument.data(),
    }
  } catch (error) {
    console.error("Error fetching user", error)
  }
}
export default firebase

