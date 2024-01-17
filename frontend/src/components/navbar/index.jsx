import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../navbar/navbar.scss";
const Navbar = () => {
  const [background, setBackground] = useState("transparent");
  const scrollY = window.scrollY;
  if (scrollY === 600) {
    setBackground("#404044");
  }
  console.log(background);
  return (
    <>
      <nav>
        <div className="container">
          <div className="left-sec">
            <span>Tasty</span>
          </div>
          <ul className="right-sec">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/add">
              <li>Add</li>
            </Link>
            <Link to="/wishlist">
              {" "}
              <li>Wishlist</li>
            </Link>
            <Link to="/basket">
              {" "}
              <li>Basket</li>
            </Link>

            <li>Menu</li>
            <li>Specialist</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
