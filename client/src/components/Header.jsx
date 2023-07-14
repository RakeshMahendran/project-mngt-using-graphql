import React from "react";
import logo from "../components/assests/logo.json";

const Header = () => {
  return (
    <div className="navbar bg-dark mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
            <div className="d-flex gap-2">
                <img src={logo.logoOfGraphQl} alt="" className="mr-2" />
                <div>Project Mgmt</div>
            </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
