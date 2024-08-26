import React from "react";
import classes from "./practiceListView.module.css";
import { MdHistory } from "@react-icons/all-files/md/MdHistory";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import { GoTasklist } from "@react-icons/all-files/go/GoTasklist";
import { Practice } from "../../models/multiple-question";
import mergeClassNames from "merge-class-names";
import CustomLink from "../CustomLink";
import { useMasterPracticeTimeCountMap } from "../../redux/selector";

interface PracticeListViewProps {
  className?: string;
  title?: string;
  practices: Practice[];
  showError?: boolean;
  emptyMessage?: string;
  errorMessage?: string;
}

function PracticeListView({
  className,
  title = "Danh sách đề luyện tập",
  practices,
  showError,
  emptyMessage = "Danh sách đề ôn tập trống",
  errorMessage = "Không thể tải danh sách đề ôn tập",
}: PracticeListViewProps) {
  const practiceTimeCountMap = useMasterPracticeTimeCountMap();

  return (
    <div className={mergeClassNames(classes.root, className)}>
      <h5 className={classes.heading}>{title}</h5>
      {practices.length === 0 || showError ? (
        <div className={classes.emptyWrapper}>
          <span className={classes.emptyMessage}>
            {showError ? errorMessage : emptyMessage}
          </span>
        </div>
      ) : (
        <div className={classes.practiceList}>
          {practices.map((practice) => (
            <CustomLink
              to={"/practice-review/" + practice.code}
              key={practice.code}
              className={classes.practiceListItem}
            >
              <span className={classes.practiceTitle}>{practice.title}</span>
              <span className={classes.practiceDescription}>
                {practice.description}
              </span>
              <div className={classes.practiceInfoContainer}>
                <div className={classes.numberContainer}>
                  <MdHistory className={classes.historyIcon} />
                  <span className={classes.number}>{`${
                    practiceTimeCountMap
                      ? practiceTimeCountMap[practice.code] || 0
                      : 0
                  } đã làm`}</span>
                </div>
                {practice.chapters ? (
                  <div className={classes.numberContainer}>
                    <GoListUnordered className={classes.chapterCountIcon} />
                    <span className={classes.number}>{`${
                      practice.chapters.length || 0
                    } chương`}</span>
                  </div>
                ) : null}
                <div className={classes.numberContainer}>
                  <GoTasklist className={classes.questionCountIcon} />
                  <span className={classes.number}>{`${
                    practice.numberOfQuestion || 0
                  } câu hỏi`}</span>
                </div>
              </div>
            </CustomLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default PracticeListView;
