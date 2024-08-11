import React from "react";
import classes from "./controlledSwitch.module.css";
import mergeClassNames from "merge-class-names";

function ControlledSwitch(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div className={classes.toggleButtonCover}>
      <div className={classes.buttonCover}>
        <div className={mergeClassNames(classes.button, classes.r)}>
          <input type="checkbox" className={classes.checkbox} {...props} />
          <div className={classes.knobs} />
          <div className={classes.layer} />
        </div>
      </div>
    </div>
  );
}

export default ControlledSwitch;
