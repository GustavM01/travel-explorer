import React from "react";
import "./Button.css";
import { Link } from "react-router";

function Button({
  className = "",
  to,
  href,
  variant = "primary",
  children,
  ...props
}) {
  if (to)
    return (
      <Link to={to}>
        <button {...props} className={`btn btn-${variant} ${className}`}>
          {children}
        </button>
      </Link>
    );
  if (href)
    return (
      <a href={href}>
        <button {...props} className={`btn btn-${variant} ${className}`}>
          {children}
        </button>
      </a>
    );
  return (
    <button {...props} className={`btn btn-${variant} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
