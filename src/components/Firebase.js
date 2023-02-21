// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLV3IqwQuav6ocHTCqANls2OPn6RraErk",
  authDomain: "myproject-f21ee.firebaseapp.com",
  projectId: "myproject-f21ee",
  storageBucket: "myproject-f21ee.appspot.com",
  messagingSenderId: "165997287837",
  appId: "1:165997287837:web:2500eb9fed1cc60febf774",
  measurementId: "G-T7PH24P5PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app);
const provider=new GoogleAuthProvider()

export const signInwithGoogle =()=>{
    console.log("sign in")
    signInWithPopup(auth,provider)
    .then((result)=>{
        console.log(result);
        const name=result.user.displayName;
        localStorage.setItem("name", name);
        // console.log(localStorage.getItem("name"));
        window.location.reload(false);

    }).catch((error)=>{
        console.log(error);
    });
    
    
};
