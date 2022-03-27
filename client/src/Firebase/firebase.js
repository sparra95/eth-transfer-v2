import { initializeApp } from "firebase/app"
import * as database from "firebase/database"
const FIREBASE_API_KEY = import.meta.env.FIREBASE_API_KEY
const FIREBASE_AUTHDOMAIN = import.meta.env.FIREBASE_AUTHDOMAIN
const FIREBASE_PROJECT_ID = import.meta.env.FIREBASE_PROJECT_ID
const FIREBASE_STORAGE_BUCKET = import.meta.env.FIREBASE_STORAGE_BUCKET
const FIREBASE_MESSAGING_SENDER_ID = import.meta.env.FIREBASE_MESSAGING_SENDER_ID
const FIREBASE_APP_ID = import.meta.env.FIREBASE_APP_ID

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  databaseURL: "https://eth-transfer-app-default-rtdb.firebaseio.com",
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID
}

database.getDatabase( initializeApp(firebaseConfig) )

export { database }