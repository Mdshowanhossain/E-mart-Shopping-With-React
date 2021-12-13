import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section className="main_header_wrapper">
        <div className="header_container">
          <div className="header_container_wrapper">
            <div className="left_header_container">
              <h3>UPTO 70% DISCOUNT ON WOMEN'S CLOTHING</h3>
              <h1>Grand Summer Sale!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium consequatur corporis, quisquam consectetur deleniti
                cumque corrupti ullam repellendus commodi voluptas.
              </p>
              <button className="visit_now_btn">VISIT NOW</button>
            </div>
            <div className="right_header_container">
              <img src="./images/head_b.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
