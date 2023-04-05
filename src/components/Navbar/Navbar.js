import React from "react";
import { Link } from "react-router-dom";
import me from "../../assets/me.jpg";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <img src={me} alt="me" className="rounded-circle" height="150px"/>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/experience'}>Expereience</Link>
        <Link to={'/education'}>Education</Link>
        <Link to={'/skills'}>Skills</Link>
        <Link to={'/interest'}>Interest</Link>
        <Link to={'/awards'}>Awards</Link>
      </div>
    </nav>
  );
};

export default Navbar;