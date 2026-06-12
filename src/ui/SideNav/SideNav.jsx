import React from "react";
import "./SideNav.css";
import { Link, NavLink } from "react-router";
import { Heart, MountainSnow, Scale, Search } from "lucide-react";

function SideNav() {
  return (
    <div className="side-nav-container">
      <Link to={"/"} className="side-nav-header">
        <MountainSnow size={90} />
        <h2>Travel Explorer</h2>
      </Link>
      <div className="side-nav">
        <NavLink to={"/"} className="nav-item">
          <Search size={20} /> Explore
        </NavLink>
        <NavLink to={"/saved"} className="nav-item">
          <Heart size={20} /> Saved
        </NavLink>
        <NavLink to={"/compare"} className="nav-item">
          <Scale size={20} /> Compare
        </NavLink>
      </div>
    </div>
  );
}

export default SideNav;
