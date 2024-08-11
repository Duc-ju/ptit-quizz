import React from "react";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import classes from "./subjectIcon.module.css";

interface SubjectIconProps {
  icon: string;
}

function SubjectIcon({ icon }: SubjectIconProps) {
  return (
    <div className={classes.root}>
      <FaGraduationCap className={classes.icon} />
    </div>
  );
}

export default SubjectIcon;
