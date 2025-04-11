import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="px-4 fixed w-full top-0 z-10 flex items-center justify-between py-6 bg-pink-200">
      {/* first div */}
      <div className="">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-base md:text-3xl font-bold text-pink-600"
              : "text-base md:text-3xl font-bold"
          }
        >
          <h1>Explorer</h1>
        </NavLink>
      </div>
      {/* second div */}
      <div className="">
        <ul className="hidden md:flex items-center gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-normal text-pink-600"
                : "text-lg font-normal text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-normal text-pink-600"
                : "text-lg font-normal text-gray-700"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-normal text-pink-600"
                : "text-lg font-normal text-gray-700"
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-lg font-normal text-pink-600"
                : "text-lg font-normal text-gray-700"
            }
          >
            Cart
          </NavLink>
        </ul>
      </div>
      {/* third div */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center ">
          <input
            type="text"
            placeholder="What's you looking for?"
            className="outline-none rounded-sm w-full pl-10 py-2 bg-gray-50"
          />
          <img
            src={assets.search}
            alt=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5"
          />
        </div>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "p-1 border-b-2 border-pink-600" : "p-1"
          }
        >
          <img src={assets.wish} alt="" className="cursor-pointer w-6 h-6" />
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "p-1 border-b-2 border-pink-600" : "p-1"
          }
        >
          <div className="relative">
            <img src={assets.cart} alt="" className="cursor-pointer w-6 h-6" />
            <div className="absolute -top-2 -right-1 bg-red-500 text-white rounded-full text-sm w-4 h-4 flex justify-center items-center cursor-pointer">
              0
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "p-1 border-b-2 border-pink-600" : "p-1"
          }
        >
          <img src={assets.user} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
