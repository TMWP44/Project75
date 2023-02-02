import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBlbk-TWdyLY0Mw5SdpbFBvESBxs9A1hds",
  authDomain: "project71-6a76b.firebaseapp.com",
  projectId: "project71-6a76b",
  storageBucket: "project71-6a76b.appspot.com",
  messagingSenderId: "957572920456",
  appId: "1:957572920456:web:a56ba2fbe3fae0ceb69b3d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
