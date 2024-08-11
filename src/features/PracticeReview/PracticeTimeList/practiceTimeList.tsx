import React from "react";
import PracticeTimeView from "../PracticeTimeView";
import { PracticeTime } from "../../../models/multiple-question";
import classes from "./practiceTime.module.css";
import LoadingIcon from "../../../components/LoadingIcon";
import LoadingButton from "../../../components/LoadingButton";
// @ts-ignore
import mergeClassNames from "merge-class-names";

interface PracticeTimeProps {
  practiceTimes: PracticeTime[];
  fetching: boolean;
  error: boolean;
  className: string;
  handleRefresh: () => void;
}

function PracticeTimeList({
  practiceTimes,
  fetching,
  error,
  handleRefresh,
  className,
  ...restProps
}: PracticeTimeProps) {
  if (fetching)
    return (
      <div className={classes.emptyWrapper}>
        <LoadingIcon />
      </div>
    );

  if (error) {
    return (
      <div className={classes.emptyWrapper}>
        <LoadingButton onClick={handleRefresh} fetching={fetching}>
          Tải lại
        </LoadingButton>
      </div>
    );
  }

  if (practiceTimes.length === 0) {
    return (
      <div className={classes.emptyWrapper}>
        <span className={classes.emptyTitle}>Danh sách lịch sử trống</span>
      </div>
    );
  }

  return (
    <div
      className={mergeClassNames(classes.practiceTimeList, className)}
      {...restProps}
    >
      {practiceTimes.map((practiceTime) => (
        <PracticeTimeView practiceTime={practiceTime} key={practiceTime.id} />
      ))}
    </div>
  );
}

export default PracticeTimeList;
