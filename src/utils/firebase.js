import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu4FcPF03FJmxHLjybDv303hxk2zB_rf0",
  authDomain: "play-golf-korea-vue.firebaseapp.com",
  projectId: "play-golf-korea-vue",
  storageBucket: "play-golf-korea-vue.appspot.com",
  messagingSenderId: "517376026974",
  appId: "1:517376026974:web:545a774a36548a8f4a87cf"
};

firebase.initializeApp(firebaseConfig);

export default firebase