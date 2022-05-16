import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoXAjz4MF6e0nX9RUePNrcCXg_Sanu_XY",
  authDomain: "seoul-on-board-real-estate.firebaseapp.com",
  projectId: "seoul-on-board-real-estate",
  storageBucket: "seoul-on-board-real-estate.appspot.com",
  messagingSenderId: "309645348942",
  appId: "1:309645348942:web:e50d79aecd96aa646ef31f"
};

firebase.initializeApp(firebaseConfig);

export default firebase