import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="px-4 fixed w-full top-0 z-10 flex items-center justify-between py-6 bg-pink-200">
      {/* first div */}
      <div className="">
        <Link to="/">
          <h1 className="text-2xl font-bold">Explorer</h1>
        </Link>
      </div>
      {/* second div */}
      <div className="">
        <ul>
          <Link to="/" className="text-lg font-normal text-gray-700">
            Home
          </Link>
          <Link to="/about" className="text-lg font-normal text-gray-700">
            About
          </Link>
          <Link to="/contact" className="text-lg font-normal text-gray-700">
            Contact
          </Link>
          <Link to="/cart" className="text-lg font-normal text-gray-700">
            Cart
          </Link>
        </ul>
      </div>
      {/* third div */}
      <div className="">
        <div>
          <input type="text" placeholder="What are you looking for?" />
          <img src={assets.search} alt="" />
        </div>
        <Link to="/wishlist">
          <img src={assets.wish} alt="" />
        </Link>
        <Link to="/cart">
          <img src={assets.cart} alt="" />
          <div>0</div>
        </Link>
        <Link to="/login">
          <img src={assets.user} alt="" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
