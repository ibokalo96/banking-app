import React from "react";
import { Link } from "react-router-dom";
import { useMatch } from "react-router";
import "./style.scss";

const MenuTabItem = ({ to, name, image, activeImage }) => {
  const isActive = useMatch(to);

  return (
    <>
      <li className={isActive ? "active_nav_list_name" : "nav_list_name"}>
        {isActive ? <div className="nav-marker"></div> : null}

        <img src={isActive ? activeImage : image} alt="menu-icons" />
        <Link to={to}>{name}</Link>
      </li>
    </>
  );
};

export default MenuTabItem;
