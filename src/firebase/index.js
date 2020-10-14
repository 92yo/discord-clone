import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4iXRj_ujrzWveqFeOkXPiCjTk7WbACpA",
  authDomain: "discord-clone-7794b.firebaseapp.com",
  databaseURL: "https://discord-clone-7794b.firebaseio.com",
  projectId: "discord-clone-7794b",
  storageBucket: "discord-clone-7794b.appspot.com",
  messagingSenderId: "806506397169",
  appId: "1:806506397169:web:08ec454d901ed47da45850",
  measurementId: "G-5T5R7WT10H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
