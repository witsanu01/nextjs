import React from "react";

export default function index() {
  return (
    <div>
      <h6>
        yellow dresses<span> - I found 150 products for you</span>
      </h6>
      <div className="slide-container">
        <section className="container" id="store-product">
          <div className="store-product hat">
            <img src="/hat.jpg" alt="" height={200} />
            <div className="product-details">
              <p>
                <span>hat shop</span>
              </p>{" "}
              <h4>69.60 USD</h4>
              <a href="#">cart</a>
            </div>
          </div>
          <div className="store-product shirt">
            <img src="/shirt.jpg" alt="" height={200} />
            <div className="product-details">
              <p>
                <span>hat shop</span>
              </p>{" "}
              <h4>69.60 USD</h4>
              <a href="#">cart</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
