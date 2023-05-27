import React from "react";
import "./style.scss";
import { UserList } from "../UserList";
import logo from "../../assets/logo.png";

export const Layout = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src={logo} alt="logo" />
        <br />
        <br />
        <br />
        <button>Customers</button>
      </div>
      <div className="main">
        <header>
          <h2>Customer Name</h2>
        </header>
        <div className="content">
          <UserList />
        </div>
      </div>
    </div>
  );
};
