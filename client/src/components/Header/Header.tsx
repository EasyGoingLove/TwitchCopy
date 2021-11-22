import React from "react";

import "./Header.css";

import { Link } from "react-router-dom";

import GoogleAuth from "../../Auth/GoogleAuth";

const Header: () => JSX.Element = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="itme">
        Streamer
      </Link>
      <div className=" right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        <GoogleAuth/>
      </div>
    </div>
  );
};

export default Header;
