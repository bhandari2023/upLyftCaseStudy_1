// src/components/Allproducts.js

import React from "react";
import Header from "../components/Header";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Allproducts = () => {
  return (
    <div>
      <Header />
      <div
        id="mycarousel"
        className="carousel slide m-5"
        data-bs-ride="carousel"
        data-bs-interval="2500"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row">
              {/* Card 1 of slide 1 */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Men's Combo</h5>
                    <p className="card-text text-muted mb-3">
                      SOffer: INR-1000
                    </p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 of slide 1 */}
              <div className="col-md-3 col-sm-6 col-12 d-none d-sm-block">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Men's Combo</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 of slide 1 */}
              <div className="col-md-3 col-sm-6 col-12 d-none d-md-block">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Womens's Combo</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 4 of slide 1 */}
              <div className="col-md-3 col-sm-6 col-12 d-none d-md-block">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1603252110971-b8a57087be18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Men's Combo</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue with other slides */}
          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row">
              {/* Card 1 of slide 2 */}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Product Title</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* card 2 of slide2*/}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Product Title</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* card 3 of slide2*/}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Product Title</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>
              {/* card 4 of slide2*/}
              <div className="col-md-3 col-sm-6 col-12">
                <div className="card">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674828601017-2b8d4ea90aca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D"
                    className="card-img-top img-fluid"
                    alt="cloth"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-3">Product Title</h5>
                    <p className="card-text text-muted mb-3">Offer: INR-1000</p>
                    <button type="button" className="btn btn-dark btn-sm">
                      Add to Cart{" "}
                      <FontAwesomeIcon
                        className="cart mx-1"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continue adding more slides as needed */}
        </div>
        {/* Controls for carousel */}
        <a
          className="carousel-control-prev"
          href="#mycarousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#mycarousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Allproducts;
