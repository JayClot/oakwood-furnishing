import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBXxHgHZdcAGkFApD_ILs38rXK2-q9kc7M",
  authDomain: "oakwood-db.firebaseapp.com",
  projectId: "oakwood-db",
  storageBucket: "oakwood-db.appspot.com",
  messagingSenderId: "522343101110",
  appId: "1:522343101110:web:16573374c7c45c17266c17",
  measurementId: "G-31PYW3D14E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
