import React from "react";
import classes from "./loadingFallback.module.css";
import LoadingIcon from "../LoadingIcon";

function LoadingFallBack() {
  return (
    <section className={classes.root}>
      <LoadingIcon />
    </section>
  );
}

export default LoadingFallBack;
