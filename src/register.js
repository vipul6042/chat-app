import React, { useState } from "react";
import{initializeApp} from "firebase/app"
import{
    getAuth,
    createUserWithEmailAndPassword,
    // sendPasswordResetEmail,
    // signInWithEmailAndPassword,signOut,
  } from "firebase/auth"
  import{
    getFirestore,collection,onSnapshot,
    addDoc,deleteDoc,doc,
    query,where,
    orderBy,serverTimestamp,
    updateDoc,
} from "firebase/firestore"
// import{initializeApp} from "firebase/app"
import "./login_signup.css";
// import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = (props) => {
  const firebaseConfig = {
    apiKey: "AIzaSyCKkSOQFm7Aw459i0nM_UnJYeNmV4s_O-k",
    authDomain: "fir-tutorial-2b066.firebaseapp.com",
    projectId: "fir-tutorial-2b066",
    storageBucket: "fir-tutorial-2b066.appspot.com",
    messagingSenderId: "187938277954",
    appId: "1:187938277954:web:9392878723050e56e4fbdb"
  };

//inti firebase app
  initializeApp(firebaseConfig);

//init firebase service
  const auth = getAuth();
  const db=getFirestore()

  //collection ref
  const colRef=collection(db,"users")

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  // const auth=getAuth()

  //authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((cred) => {
        console.log("user cred:", cred.user);
        e.target.reset();
        alert("registered")
        addDoc(colRef,{
          uid:cred.user.uid,
          name:name
        })
        
        
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h1>Chatting App</h1>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-body">
          <label>Name</label>

          <div className="col">
            <input
              type="text"
              className="login_input"
              placeholder="First name"
              aria-label="First name"
              onChange={(e) => setName(e.target.value)}
            />
            {/* <input
              type="text"
              className="login_input"
              placeholder="Last name"
              aria-label="Last name"
            /> */}
          </div>

          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            value={email}
            className="login_input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />

          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            value={pass}
            className="login_input"
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="remember-me" htmlFor="gridCheck">
              Remember me for month
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};
