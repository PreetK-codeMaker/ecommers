import React from "react";
import "./Home.css";
import { default as agilityBack } from "./Images/background images/agility-background.png";
import Product from "./Product";

// https://www.ulethbridge.ca/sites/default/files/styles/hero_lg/public/2019/02/agility-background.png?itok=wH4qManF

/*Image es Refernce https://unsplash.com/photos/LqKhnDzSF-8*/
/*Make a new reactive Card after */
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={agilityBack} alt="BackImages" />

        <div className="home_row">
          {" "}
          {/*one rows*/}
          <Product
            pKey="1"
            title="Stuff prop 1"
            price="29.99"
            image="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            rating={2}
          />
          <Product
            pKey="2"
            title="Stuff prop 1"
            price="29.99"
            image="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            rating={2}
          />
        </div>
        <div className="home_row">
          {" "}
          <Product
            pKey="3"
            title="Stuff prop 1"
            price="2.00"
            image="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            rating={2}
          />
          <Product
            pKey="4"
            title="Stuff prop 1"
            price="29.99"
            image="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            rating={2}
          />
          <Product
            pKey="5"
            title="Stuff prop 1"
            price="29.99"
            image="https://s5.postimg.cc/j9r8yf9gn/sws1.png"
            rating={2}
          />
          {/*Two Rows*/}
        </div>
        <div className="home_row">
          {/*third row*/}
          <Product
            pKey="6"
            title="Stuff prop 1"
            price="29.99"
            image="https://cdn-3d.niceshops.com/upload/image/product/large/default/extrudr-pla-nx-2-turquoise-208613-en.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
