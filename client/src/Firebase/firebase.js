import { initializeApp } from "firebase/app"
import * as database from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyAay8Jq1AlvzrzyHWZDiUWNBMwFiM0k6W8",
  authDomain: "eth-transfer-app.firebaseapp.com",
  databaseURL: "https://eth-transfer-app-default-rtdb.firebaseio.com",
  projectId: "eth-transfer-app",
  storageBucket: "eth-transfer-app.appspot.com",
  messagingSenderId: "438393731496",
  appId: "1:438393731496:web:37d89d5bdd9a61b38bc59d"
}

database.getDatabase( initializeApp(firebaseConfig) )

export { database }