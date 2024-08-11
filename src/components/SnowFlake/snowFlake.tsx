import React, { useState } from "react";
import mergeClassNames from "merge-class-names";
import classes from "./snowFlake.module.css";
import { SHOW_CHRISTMAS_THEME } from "../../constant/constant";
import { useSnowFlakeButtonVisibleSelector } from "../../redux/selector";

function SnowFlake() {
  const [snowflake, setSnowflake] = useState(SHOW_CHRISTMAS_THEME);
  const snowFlakeButtonVisible = useSnowFlakeButtonVisibleSelector();

  return (
    <>
      <div
        className={mergeClassNames(
          classes.snowflakes,
          !snowflake ? classes.hidden : ""
        )}
        aria-hidden="true"
      >
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
        <div className={classes.snowflake}>❅</div>
        <div className={classes.snowflake}>❆</div>
      </div>
      {snowFlakeButtonVisible ? (
        <div
          className={mergeClassNames(
            classes.snowButton,
            snowflake ? classes.isShowing : ""
          )}
          onClick={() => setSnowflake((old) => !old)}
        >
          <span>❆</span>
        </div>
      ) : null}
    </>
  );
}

export default SnowFlake;
