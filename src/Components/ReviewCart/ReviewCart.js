import React from "react";
import "./ReviewCart.css";
const ReviewCart = () => {
  return (
    <>
      <div className="review_cart_container">
        <div className="review_cart_item_wrapper">
          <div className="review_cart_item_container">
            <div className="review_cart">
              <span>PRODUCT</span>
              <div className="review_cart_right_item">
                <span>PRICE</span>
                <span>QUANTITY</span>
                <span>REMOVE</span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
            <div className="item_review_cart">
              <div className="item_review_image">
                <img src="./images/n.jpg" alt="" />
                <div>
                  <p>Timex Unisex Originals</p>
                  <p>Category:Watches</p>
                </div>
              </div>
              <div className="">
                <span>$79.00</span>
                <span>3</span>
                <span>
                  <i class="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="review_total_price_container">
            <div className="review_total_price_box">
              <div className="cart_delivery_payment">
                <span>Cart ---- Delivery ---- Payment</span>
              </div>
              <h2 className="order_summary">Order Summary</h2>
              <div className="order_total_container">
                <div className="order_total">
                  <p>Order Total</p>
                  <p>$20,89</p>
                </div>
                <div className="delivery_charges">
                  <p>Delivery Charges</p>
                  <p>$20,89</p>
                </div>
              </div>
              <div className="total_payable">
                <span>TOTAL PAYABLE</span>
                <span>$40000</span>
              </div>
              <button className="proceed_checkout_btn">PROCEED CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCart;
