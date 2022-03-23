import React from 'react'
import "./css/navbar.css";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/home",
    id: "header-link-home",
  },
  {
    title: "About",
    link: "/about",
    id: "header-link-about",
  },
  {
    title: "All_Products",
    link: "/products",
    id: "header-link-products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div className="navbar">
      <ul>
        {links.map((el, index) => {
          return (
            <Link key={index} to={el.link}>
              <li id={el.id}>{el.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
  };



