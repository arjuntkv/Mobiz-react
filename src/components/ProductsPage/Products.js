import React from "react";
import { Productconsumer } from "../../context/Context";
import Title from "../title";
import Product from "../Product";
import ProductFilter from './ProductFilter';

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


              {/* Product filter */}
              <ProductFilter />


              {/* total count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>


              {/* products */}
              <div className="row py-5">

                {/* if there is no filtered items then display "no items" else map through product component */}
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no items matched your search
                  </div>) : 
                  (
                  filteredProducts.map(product => <Product key={product.id} product={product} />)
                  )
                }

              </div>


            </div>
          </section>
        );
      }}
    </Productconsumer>
  );
}
