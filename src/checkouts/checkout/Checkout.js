import React from "react";
import Subtotal from "../../Subtotal";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";

function Checkout() {
  //pulling information basket.
  const [{ basket, user }] = useStateValue();
  const userName = () => {
    if (user) {
      return "Hello, " + user?.email.substring(0, user.email.indexOf("@"));
    }
  };
  return (
    <div className="checkout row">
      <div className="checkout_left column">
        <div>
          <h3>{userName()}</h3>
          <h2 className="checkout_item">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          {/*basketItem*/}
          {/*basketItem*/}
          {/*basketItem*/}
          {/*basketItem*/}
          {/*basketItem*/}
        </div>
      </div>
      <div className="checkout_right column">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
