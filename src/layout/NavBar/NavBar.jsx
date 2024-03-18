import React from "react";
import { Header } from "./styles";
import Logo from "../../assets/images/logo.svg";

const NavBar = () => {
  return (
    <Header className="container-fluid">
      <div className="header">
        <img src={Logo} alt="Logotipo" className="img-fluid" />
        <p className="fs-1 fw-bold">To do List</p>
      </div>
    </Header>
  );
};

export default NavBar;
