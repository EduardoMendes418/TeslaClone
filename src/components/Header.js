import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <img src={TeslaLogo} alt="Tesla Logo" />
      </div>

      <div className="header_center">
        <p>MODEL S</p>
        <p>MODEL 3</p>
        <p>MODEL X</p>
        <p>MODEL Y</p>
        <p>SOLAR ROOF</p>
        <p>SOLAR PANELS</p>
      </div>

      <div className="header_right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
