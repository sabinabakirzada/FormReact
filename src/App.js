import React, { useState } from "react";

const App = () => {
  const [nameValue, setNameValue] = useState("");
  const [nameValidation, setNameValidation] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [emailRegexVal, setEmailRegexVal] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [passwordRegexVal, setPasswordRegexVal] = useState(false);
  const [passwordAgainValue, setPasswordAgainValue] = useState("");
  const [passwordAgainValidation, setPasswordAgainValidation] = useState(false);
  const [passwordAgainRegexVal, setPasswordAgainRegexVal] = useState(false);


  const checkValidation = () => {
    if (!nameValue.trim()) {
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }

    if (!emailValue.trim()) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }

    if (emailValue.trim()) {
      checkEmailRegEx();
    }
    if (!passwordValue.trim()) {
      setPasswordValidation(true);
    } else {
      setPasswordValidation(false);
    }

    if (passwordValue.trim()) {
      checkPasswordRegEx();
    }

    if (!passwordAgainValue.trim()) {
      setPasswordAgainValidation(true);
    } else {
      setPasswordAgainValidation(false);
    }

    if(passwordAgainValue.trim()){
      checkPasswordAgainRegEx()
    }

  };

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
    setNameValidation(false);
  };

  const checkEmailRegEx = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailValue.match(mailformat)) {
      setEmailRegexVal(false);
    } else {
      setEmailRegexVal(true);
    }
  };

  const checkPasswordRegEx = () => {
    var passwordformat =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordValue.match(passwordformat)) {
      setPasswordRegexVal(false);
    } else {
      setPasswordRegexVal(true);
    }}

    const checkPasswordAgainRegEx = () => {
      var passwordAgainformat =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
      if (passwordAgainValue.match(passwordAgainformat)) {
        setPasswordAgainRegexVal(false);
      } else {
        setPasswordAgainRegexVal(true);
      }}


  return (
    <div>
      <label htmlFor="">Name</label>
      <br />
      <input type="text" onChange={handleNameChange} value={nameValue} /> <br/>

      {nameValidation ? (
        <p style={{ color: "red" }}>This field is required</p>) : ("")}
      
      {nameValue.length<10 ? (
        <p style={{ color: "red" }}>Please enter at least 6 characters</p>) : ("")}

      <label htmlFor="">Email</label>
      <br />
      <input
        type="text"
        value={emailValue}
        onChange={(e) => setEmailValue(e.target.value)}/>
      {emailValidation ? (
        <p style={{ color: "red" }}>This field is required</p>) : ("")}
      
      {emailRegexVal ? <p style={{ color: "red" }}>Invalid Email</p> : ""}
      <br />

      <label htmlFor="">Password</label> <br/>
      
      <input
        type="password"
        value={passwordValue}
        onChange={(e) => setPasswordValue(e.target.value)}/> <br/>

      <label htmlFor="">Password Again</label> <br/>
      
      <input
        type="password"
        value={passwordAgainValue}
        onChange={(e) => setPasswordAgainValue(e.target.value)}/>

      {passwordValidation ? (
        <p style={{ color: "red" }}>This field is required</p>) : ("")}

      {passwordValue.length<8 ? (
        <p style={{ color: "red" }}>password must be at least 8 characters long</p>) : ("")}

      {passwordRegexVal ? <p style={{ color: "red" }}>Invalid Password</p> : ("")}
      <br />

      {passwordAgainValidation ? (
        <p style={{ color: "red" }}>This field is required</p>) : ("")}

      {passwordAgainValue.length<8 ? (
        <p style={{ color: "red" }}>password must be at least 8 characters long</p>) : ("")}

      {passwordAgainRegexVal ? <p style={{ color: "red" }}>Invalid Password</p> : ("")}
      <br />
      {passwordValue!==passwordAgainValue ? (
        <p style={{ color: "red" }}>Passwords don't match.</p>) : ("")
      }


      <button onClick={checkValidation}>Add</button>
    </div>
  );
};

export default App;