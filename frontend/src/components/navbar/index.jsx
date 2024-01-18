import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../navbar/navbar.scss";
const Navbar = () => {
  const [background, setBackground] = useState("transparent");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/" && window.scrollY >= 600) {
        setBackground("#404044");
      } else {
        setBackground("transparent");
      }
    };

    const updateBackground = () => {
      if (location.pathname === "/") {
        setBackground("transparent");
      } else {
        setBackground("#404044"); // Set to gray for pages other than the home page
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateBackground();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  console.log(background);
  return (
    <>
      <nav style={{ backgroundColor: background }}>
        <div className="container">
          <div className="left-sec">
            <span>Tasty</span>
          </div>
          <ul className="right-sec">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <li>Home</li>
            </Link>
            <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
              <li className={location.pathname === "/add" ? "active" : ""}>
                Add
              </li>
            </Link>
            <Link
              to="/wishlist"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <li className={location.pathname === "/wishlist" ? "active" : ""}>
                Wishlist
              </li>
            </Link>
            <Link
              to="/basket"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <li className={location.pathname === "/basket" ? "active" : ""}>
                Basket
              </li>
            </Link>

            <li>Menu</li>
            <li>Specialist</li>
            <li>Reservation</li>
            <li>Blog</li>
            <li>About</li>
            <li>Contact</li>
            <Link to="/:id" style={{ textDecoration: "none", color: "none" }}>
              {" "}
              <li className={location.pathname === "/:id" ? "active" : ""}></li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
