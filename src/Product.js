import React from "react";
import "./Product.css";
import StarRateSharpIcon from "@mui/icons-material/StarRateSharp";
import { useStateValue } from "./StateProvider";
// https://s5.postimg.cc/j9r8yf9gn/sws1.png

//eslint-disable-next-line
function Product({ pKey, title, image, rating, price }) {
  //eslint-disable-next-line
  const [{ basket }, dispatch] = useStateValue();
  // console.log("This is the ", basket);
  const addToBasket = () => {
    //add to data layer.
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        pKey: pKey,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };
  //passing props
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p> {/*Calling title name*/}
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateSharpIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
