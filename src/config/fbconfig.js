import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCY79Zkp-FxvOSndJi2TU_UWAgfgBd0pd8",
  authDomain: "fir-react-tutor.firebaseapp.com",
  databaseURL: "https://fir-react-tutor.firebaseio.com",
  projectId: "fir-react-tutor",
  storageBucket: "",
  messagingSenderId: "748490768029",
  appId: "1:748490768029:web:0f46a2f609c7af211dde74",
  measurementId: "G-L4574HZWFP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
