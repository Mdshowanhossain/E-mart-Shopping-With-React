import React from "react";
import "./Trending.css";
const Trending = () => {
  return (
    <>
      <div className="trending_container">
        <div className="trending_title">
          <h1>Trending Item</h1>
        </div>

        <div className="trending_item_btn">
          <span>MAN</span>
          <span>WOMAN</span>
          <span>KIDS</span>
          <span>ACCESSORIES</span>
          <span>ESSENTIAL</span>
          <span>PRICES</span>
        </div>

        <div className="trending_card_wrapper">
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
          <div className="trending_item_card">
            <div className="item_card_images">
              <img src="./images/n.jpg" alt="" />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
