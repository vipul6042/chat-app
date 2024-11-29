import React, { useState } from "react";
import{initializeApp} from "firebase/app"
import{
    getAuth,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,signOut,
  } from "firebase/auth"

// import logo from './logo.svg';
import "./login_signup.css";
import { Login } from "./login";
import { Register } from "./register";


function LoginControl() {
  

  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm}  />
      )}
    </div>
  );
}

export default LoginControl;
