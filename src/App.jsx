import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import AddToFavourite from "./pages/AddToFavourite";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/checkout" element={<Checkout></Checkout>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signUp" element={<SignUp></SignUp>} />
          <Route path="/cart" element={<Cart></Cart>} />
          <Route path="/wishlist" element={<AddToFavourite></AddToFavourite>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
