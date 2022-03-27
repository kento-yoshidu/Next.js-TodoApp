import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  });
}

const googleProvider = new firebase.auth.GoogleAuthProvider()

export const auth = firebase.auth()
export const db = firebase.firestore()

export const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider)
    .catch((err) => {
      console.log(err)
    })
}

export const logOut = () => {
  firebase.auth().signOut()
    .then(() => {
      document.location.reload()
    })
    .catch((err) => {
      console.log("ログアウト時にエラー発生\nfirebase.ts\n", err)
    })
}
