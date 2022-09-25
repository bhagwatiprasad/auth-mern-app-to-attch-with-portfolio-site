import React from "react";

const ForgetPass = () => {
  return (
    <div className="center verticalStack fs-1">
      <h1>ForgetPass Form</h1>
      <form action="" className="verticalStack p0-5 border">
        <input
          type="text"
          placeholder="Email or Phone Number"
          className="p0-5 fs-1-2"
          autoComplete="new-password"
        />
        
        <button className="p0-5 fs-1-2" type="submit">
          Send ResetPass Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
