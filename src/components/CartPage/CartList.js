import React from "react";
import { Productconsumer } from "../../context/Context";
import CartItem from "./CartItem";
export default function CartList() {
  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row">
        <div className="col">


          <Productconsumer>
            {value => {
              const { cart, increment, decrement, removeItem } = value;
                
              // if cart is empty display "cart is empty"
              if (cart.length === 0) {
                return <h1 className="text-title text-center my-4"> your cart is currently empty </h1>
              }
              //else return the cartItem component
              return (
                <>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItem={removeItem}
                    />
                  ))}
                </>
              );

            }}
          </Productconsumer>


        </div>
      </div>
    </div>
  );
}
