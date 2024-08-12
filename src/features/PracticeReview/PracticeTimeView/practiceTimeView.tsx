import React from "react";
import { convertTimeToString } from "../../../utils/convertTimeToString";
import classes from "./practiceTime.module.css";
import { PracticeTime } from "../../../models/multiple-question";
import { GoClock } from "@react-icons/all-files/go/GoClock";
import { Cell, Pie, PieChart } from "recharts";
import { RING_CHART_COLOR_CONFIG } from "../../../constant/constant";
import mergeClassNames from "merge-class-names";
import useRedirect from "../../../hooks/useRedirect";

function PracticeTimeView({ practiceTime }: { practiceTime: PracticeTime }) {
  const totalQuestionCount =
    practiceTime.numberOfRight + practiceTime.numberOfWrong;
  const redirect = useRedirect();

  const data = [
    {
      name: "Câu đúng",
      value: practiceTime.numberOfRight,
    },
    {
      name: "Câu sai",
      value: practiceTime.numberOfWrong,
    },
  ];

  function redirectToPracticeHistory(practiceTime: PracticeTime) {
    redirect("/practice-history?id=" + practiceTime.id);
  }

  return (
    <div
      className={mergeClassNames(classes.practiceTime)}
      onClick={() => redirectToPracticeHistory(practiceTime)}
    >
      <div className={classes.content}>
        <h4 className={classes.description}>{practiceTime.description}</h4>
        <span
          className={classes.totalQuestionCount}
        >{`Tổng số câu: ${totalQuestionCount}`}</span>
        <span
          className={classes.numberOfRight}
        >{`Số câu đúng: ${practiceTime.numberOfRight}`}</span>
        <div className={classes.createAtContainer}>
          <GoClock className={classes.clockIcon} />
          <span className={classes.createAt}>
            {convertTimeToString(practiceTime.createAt?.seconds)}
          </span>
        </div>
      </div>
      <div className={classes.chart}>
        <PieChart width={90} height={90}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
          >
            {data.map((item, index) => (
              <Cell key={item.value} fill={RING_CHART_COLOR_CONFIG[index]} />
            ))}
          </Pie>
        </PieChart>
        {totalQuestionCount !== 0 ? (
          <div className={classes.accuracyContainer}>
            <span className={classes.accuracy}>{`${(
              (practiceTime.numberOfRight / totalQuestionCount) *
              100
            ).toFixed(1)}%`}</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default PracticeTimeView;
