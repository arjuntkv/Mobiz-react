import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/hero";
import singleProductImg from "../images/singleProductBcg.jpeg";
import { Productconsumer } from "../context/Context";
export default function SingleProductPage() {
  return (
    <>
      <Hero img={singleProductImg} title="single product" />
      <Productconsumer>
        {value => {


          const { singleProduct, addToCart, loading } = value;
            
          //to provide Loading content
          if (loading) {
            console.log("hello from loading");
            return <h1>product loading....</h1>;
          }

          const {company,description,id,price,title,image} = singleProduct;


          return (
            <section className="py-5">
              <div className="container">
                <div className="row">

                {/* `../${image}` is used to get image from local storgage. In contentful just {image} is ok */}
                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <img
                      //src={`../${image}`} //is used when data is retrieved from local storage
                      src={image} //in contentful
                      alt="single product"
                      className="img-fluid"
                    />
                  </div>

                  <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                    <h5 className="text-title mb-4">model :{title} </h5>
                    <h5 className="text-capitalize text-muted mb-4">company : {company}</h5>
                    <h5 className="text-main text-capitalize mb-4">price : ${price}</h5>
                    <p className="text-capitalize text-title mt-3">some info about product :</p>
                    <p>{description}</p>

                    {/* Add to cart Button */}
                    <button type="button" className="main-link" style={{ margin: "0.75rem" }} onClick={() => addToCart(id)} >
                      add to cart
                    </button>
                    {/*Back to Products Link(Kindof Button) */}
                    <Link to="/products" className="main-link" style={{ margin: "0.75rem" }}>
                      back to products
                    </Link>

                  </div>

                </div>
              </div>
            </section>
          );


        }}
      </Productconsumer>
    </>
  );
}
