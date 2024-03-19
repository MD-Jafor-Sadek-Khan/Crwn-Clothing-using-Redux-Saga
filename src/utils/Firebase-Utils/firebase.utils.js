import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth"

import {
  doc,
  getDoc,
  setDoc,
  getFirestore,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD4f9MwlbsNNWR_MGRktRrexiXNvBViI6w",
  authDomain: "crwn-clothing-db-304ab.firebaseapp.com",
  projectId: "crwn-clothing-db-304ab",
  storageBucket: "crwn-clothing-db-304ab.appspot.com",
  messagingSenderId: "86324865595",
  appId: "1:86324865595:web:ab6dd119179df691708a1e",
}

const fireBaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth()

export const singInWithGooglePopUp = () => signInWithPopup(auth, googleProvider)

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider)

const db = getFirestore()

export const addCollectionAndDocuments = async (collectionName, data) => {
  const collectionRef = collection(db, collectionName)
  const batch = writeBatch(db)

  data.forEach((item) => {
    const documentRef = doc(collectionRef, item.title.toLowerCase())
    batch.set(documentRef, item)
  })

  await batch.commit()
  console.log("done")
}

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalField = {}
) => {
  if (!userAuth) return

  const userDocRef = doc(db, "users", userAuth.uid)

  const userDocSnapShot = await getDoc(userDocRef)

  if (!userDocSnapShot.exists()) {
    const { email, displayName } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalField,
      })
    } catch (error) {
      console.log("User Creation Encountered Error! ", error)
    }
  }

  return userDocSnapShot
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories")
  const queryRef = query(collectionRef)
  const querySnapShot = await getDocs(queryRef)

  return querySnapShot.docs.map((dataSnapShot) => dataSnapShot.data())
}

export const createAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserFromEmailAndPassword = async (email, password) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const userSignOut = async () => await signOut(auth)

export const onUserAuthStateChangedListner = (callBack) =>
  onAuthStateChanged(auth, callBack)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unSubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unSubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
