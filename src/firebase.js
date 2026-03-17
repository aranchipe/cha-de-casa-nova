import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBPvSmX2UBMkXhMnYPwC2c1IkXe_PD5j3U",
  authDomain: "lista-cha-lucas-marcela.firebaseapp.com",
  databaseURL: "https://lista-cha-lucas-marcela-default-rtdb.firebaseio.com/",
  projectId: "lista-cha-lucas-marcela",
  storageBucket: "lista-cha-lucas-marcela.firebasestorage.app",
  messagingSenderId: "845805814767",
  appId: "1:845805814767:web:6a9366073858f317e22c1a"
}

const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)