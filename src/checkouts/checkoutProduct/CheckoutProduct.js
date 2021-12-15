import React from "react";
import "../checkoutProduct/CheckoutProduct.css";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue(); // We need to dispatch an action from the front
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_ITEM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      {/*Image styliing*/}
      <img className="checkoutProduct_image" src={image} />
      {/*Info */}
      <div className="checkoutProduct_info">
        {/*title info styling*/}
        <p className="checkoutProduct__title'">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong> {price}</strong>
        </p>
        {/*Product Rating*/}
        <div className="checkoutProduct_rating">
          {Array(rating) /*Rating proper*/
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button>Remove from Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
