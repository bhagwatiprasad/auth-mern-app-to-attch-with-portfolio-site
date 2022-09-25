import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h100 navBar">
      <div className="logoText">PortFolio</div>
      <div className="links">
        <span>
          <NavLink to='/about'> About</NavLink>
        </span>
        <span>
          <NavLink to='/dashboard'> DashBoard</NavLink>
        </span>
        <span>
          <NavLink to='/'> Home</NavLink>
        </span>
        <span>
          <NavLink to='/forgetPass'> Forget Password</NavLink>
        </span>
        <span>
          <NavLink to='/login'> Login</NavLink>
        </span>
        <span>
          <NavLink to='/register'> Register</NavLink>
        </span>
        <span>
          <NavLink to='resetPass'> Reset Password</NavLink>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
