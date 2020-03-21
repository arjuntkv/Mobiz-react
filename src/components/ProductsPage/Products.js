import React from "react";
import { Productconsumer } from "../../context/Context";
import Title from "../title";
import Product from "../Product";

export default function Products() {
  return (
    <Productconsumer>
      {value => {
        const { filteredProducts } = value;

        return (
          <section className="py-5">
            <div className="container">

              {/* title */}
              <Title center title="our products" />

              {/* products */}
              <div className="row py-5">
                {filteredProducts.map(product => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
              
            </div>
          </section>
        );


      }}
    </Productconsumer>
  );
}
