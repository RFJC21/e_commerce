import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ProductWraper } from "./styling/ProductWraper";

export default class ProductItem extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => console.log("you clicked me")}
          >
            <Link to="/details">
              <img src={img} alt="product image" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("added to the cart");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  In Cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}{" "}
            </button>
          </div>
          {/*card footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWraper>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
