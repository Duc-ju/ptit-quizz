import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

export interface CustomNavLinkProps
  extends NavLinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  to: string;
}

function CustomNavLink(props: CustomNavLinkProps) {
  const handleChangeRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = props.to;
  };

  return <NavLink {...props} onClick={handleChangeRoute} />;
}

export default CustomNavLink;
