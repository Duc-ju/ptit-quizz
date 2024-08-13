import React from "react";
import { Link, LinkProps } from "react-router-dom";

export interface CustomLinkProps
  extends LinkProps,
    React.RefAttributes<HTMLAnchorElement> {
  to: string;
}

function CustomLink(props: CustomLinkProps) {
  const handleChangeRoute = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = props.to;
  };
  return <Link {...props} onClick={handleChangeRoute} />;
}

export default CustomLink;
