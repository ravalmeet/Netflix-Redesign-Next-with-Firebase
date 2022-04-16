// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWMuqF3Y_54_nH_Vd8Gy9kMKN1kV1ZOXg",
  authDomain: "netflix-redesign-next.firebaseapp.com",
  projectId: "netflix-redesign-next",
  storageBucket: "netflix-redesign-next.appspot.com",
  messagingSenderId: "492038190803",
  appId: "1:492038190803:web:89228a7d14229fbc8b0626"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }