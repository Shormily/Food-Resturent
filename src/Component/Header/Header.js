import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Design">
      <Link to="/Home">
        <Button variant="outline-danger" className="gap">
          Home
        </Button>
      </Link>
      <Link to="/services">
        <Button variant="outline-danger" className="gap">
          Services
        </Button>
        <Link to="/About">
          <Button variant="outline-danger" className="gap">
            About US
          </Button>
        </Link>
      </Link>
      <Link to="/contactUS">
        <Button variant="outline-danger" className="gap">
          Contact US
        </Button>
      </Link>
      {/* <Link to="/notFound">
        <Button variant="outline-danger" className="gap">
          Not Found
        </Button>
      </Link> */}
    </div>
  );
};

export default Header;
