import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav_container">
        <nav>
          <div className="">
            <a href="#">
              <span className="logo">
                <i class="fas fa-house-damage"></i>{" "}
                <span className="nav_e">e</span>Mart
              </span>
            </a>
          </div>

          <div className="nav_link_container">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <a href="#">FAQ</a>
            <span className="shopping_bucket">
              <i class="fas fa-shopping-cart"></i>10
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
