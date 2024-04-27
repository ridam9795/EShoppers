import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.logohouse.org/images/ecommerce%20logo%20maker.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <div className="header__option">
          {/* <span className="header__optionLineOne">Your</span> */}
          <span className="header__optionLineTwo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24">
              <path d="M0 0h24v24H0z" fill="#FFFFFF" />
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
