import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Subject } from "../../models/multiple-question";
import subjects from "../../data/subject";
import classes from "./practiceSubject.module.css";
import PracticeListView from "../../components/PracticeListView";
import Tags from "../../components/Tags";
import practices from "../../data/practice";

function PracticeSubject() {
  const [subject, setSubject] = useState<Subject | null>(null);
  const { subjectCode } = useParams();

  useEffect(() => {
    document.title = subject
      ? `PTIT Quizz | Môn ${subject.name}`
      : "PTIT Quizz | Ôn thi trắc nghiệm";
  }, [subject]);

  useEffect(() => {
    if (subjectCode) {
      setSubject(
        subjects.find((subject) => subject.code === subjectCode) || null
      );
    }
  }, []);

  const matchedPractices = useMemo(() => {
    if (!subject) return [];
    return practices.filter(
      (practice) => practice.subjectCode === subject.code && !practice.isHided
    );
  }, [subject]);

  const recommendPractices = useMemo(() => {
    if (!subject) {
      return [];
    }
    return practices
      .filter(
        (practice) => practice.subjectCode !== subject.code && !practice.isHided
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  }, [subject]);

  const tags = useMemo(() => {
    return [
      "Ôn thi trắc nghiệm",
      "PTIT Quizz",
      "Hệ thống ôn thi trắc nghiệm",
      "Ngân hàng câu hỏi",
      subject?.name,
    ];
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <PracticeListView
            className={classes.practiceList}
            title={
              subject
                ? `Danh sách đề luyện tập môn ${subject.name}`
                : "Danh sách đề luyện tập"
            }
            practices={matchedPractices}
          />
          {recommendPractices.length > 0 ? (
            <PracticeListView
              className={classes.recommendPracticeList}
              practices={recommendPractices}
              title={"Gợi ý luyện tập thêm"}
            />
          ) : null}
          <Tags tags={tags} className={classes.tagContainer} />
        </div>
      </div>
    </div>
  );
}

export default PracticeSubject;
