import React from "react";
import classes from "./subjectIcon.module.css";
import { Subject } from "../../../models/multiple-question";

interface SubjectIconProps {
  subject: Subject;
}

function SubjectIcon({ subject }: SubjectIconProps) {
  return (
    <div className={classes.root}>
      <img
        className={classes.subjectImage}
        src={`/image/subject/${subject.code}.webp`}
        alt={subject.name}
      />
    </div>
  );
}

export default SubjectIcon;
