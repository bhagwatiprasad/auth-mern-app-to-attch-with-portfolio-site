import React, { useEffect } from "react";

const Register = () => {
    useEffect(() =>{
        // let allInputs = document.querySelectorAll('input');
        // console.log(allInputs);
        // allInputs.forEach((input)=>{
        //     input.setAttribute('autocomplete', "off" );
        // })
    })
  return (
    <div className="center verticalStack fs-1">
      <h1>Login Form</h1>
      <form action="" className="verticalStack p0-5 border">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p0-5 fs-1-2"
          autoComplete="new-password"
        />
        <input aut type="password" placeholder="pass" className="p0-5 fs-1-2" autoComplete="new-password" />
        <label htmlFor="rememberMe" className="center">
          {" "}
          <input type="checkbox" id="rememberMe" className="w-1 h-1" />
           <span> Remember Me</span> 
        </label>
        <button className="p0-5 fs-1-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
