import React, { useState } from "react";
import mergeClassNames from "merge-class-names";
import snowman from "../../../static/img/snowman.png";
import classes from "./snowMan.module.css";

function SnowMan() {
  const [shaking, setShaking] = useState(false);
  const handleSnowmanClick = () => {
    setShaking((oldPlaying) => !oldPlaying);
  };

  return (
    <div
      className={mergeClassNames(
        classes.snowman,
        shaking ? classes.isPlaying : ""
      )}
      onClick={handleSnowmanClick}
      data-tip={"Nhạc Noel"}
    >
      <img alt={"snow-man"} src={snowman} />
    </div>
  );
}

export default SnowMan;
