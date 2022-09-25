import React from "react";

const ResetPass = () => {
  return (
    <div className="center verticalStack fs-1">
      <h1>ResetPass Form</h1>
      <form action="" className="verticalStack p0-5 border">
        <input
          aut
          type="password"
          placeholder="pass"
          className="p0-5 fs-1-2"
          autoComplete="new-password"
        />
        <input
          autoComplete="new-password"
          type="password"
          placeholder="confirmPass"
          className="p0-5 fs-1-2"
        />
        <input
          autoComplete="new-password"
          type="password"
          placeholder="confirmPass"
          className="p0-5 fs-1-2"
        />
        <button className="p0-5 fs-1-2" type="submit">
          ResetPass
        </button>
      </form>
    </div>
  );
};

export default ResetPass;
