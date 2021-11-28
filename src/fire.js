import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAHCLuirqpfvkvU24uuXAx529iJDHyb9ys",
  authDomain: "javangerschingiz.firebaseapp.com",
  projectId: "javangerschingiz",
  storageBucket: "javangerschingiz.appspot.com",
  messagingSenderId: "507570031879",
  appId: "1:507570031879:web:0519644e03b56c038049a2",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;