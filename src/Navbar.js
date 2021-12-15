/*Header and navbar*/
import React from "react";
import { default as logo } from "./Images/Logo/Agiity-monochrome-black.svg";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const userName = () => {
    if (user) {
      return user.email.substring(0, user.email.indexOf("@"));
    }
  };
  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="Navbar">
      <Link to="/">
        {" "}
        {/*This is to take back to home page*/}
        <img className="navbar_logo" src={logo} alt="Agility logo" />
      </Link>

      <div className="navbar_search">
        <input className="navbar_search_input" type="text" />
        <SearchIcon className="header_searchIcon" /> {/*Search Icon*/}
        {/*search stuff*/}
      </div>

      <div className="navbar_nav">
        {/*This would have hello sign and other stuff*/}
        <div className="navbar_option">
          {/* something*/}
          <Link to={!user && "/login"} className="link">
            {" "}
            {/*!user && "/login" mean if no user then push in*/}
            <div onClick={handleAuth} className="navbar_option_1">
              <span className="header_optionLineOptionOne">
                Hello,
                {user ? " " + userName() : " Guest"}
              </span>
              <br></br>
              <span className="header_optionLineOptionTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
              <br></br>
            </div>
          </Link>

          <div className="navbar_option_2">
            {/* something*/}
            <span className="header_optionLineOptionOne">Returns</span>
            <br></br>
            <span className="header_optionLineOptionTwo">& Orders</span>
            <br></br>
          </div>
          {/*Linking to the checkout page */}
          <Link to="/Checkout" className="link">
            <div className="navbar_optionBasket">
              {/*Hello*/}
              <ShoppingCartIcon />
              <span className="header_optionLineOptionTwo header_Basket">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Header;
