import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Home/home";
import About from "../About/about";
import Contact from "../Contacts/contact";
import Products from "../Products/products";
import NotFoundPage from "../NotfoundPage/notfoundPage";
import Layout from "../Layuot/layuout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
