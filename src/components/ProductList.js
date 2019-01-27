import React, { Component } from "react";

import Title from "./Title";
import { ProductConsumer } from "../context";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Our" title="Products" />

            <div className="row">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <ProductItem product={product} key={product.id} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
