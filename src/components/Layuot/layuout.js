import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./layuot.css";

function Layout() {
  return (
    <>
      <header className="header">
        <NavLink className="nav-link" to="/">
          Главная
        </NavLink>
        <NavLink className="nav-link" to="/about">
          О нас
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Контакты
        </NavLink>
        <NavLink className="nav-link" to="/products">
          Продукция
        </NavLink>
      </header>

      <Outlet></Outlet>

      <footer className="footer">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </footer>
    </>
  );
}

export default Layout;
