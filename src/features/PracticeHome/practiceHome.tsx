import React, { useEffect, useMemo, useState } from "react";
import { Practice, Subject } from "../../models/multiple-question";
import classes from "./practiceHome.module.css";
import mergeClassNames from "merge-class-names";
import useRedirect from "../../hooks/useRedirect";
import SubjectIcon from "./SubjectIcon";
import Tags from "../../components/Tags";
import subjects from "../../data/subject";
import practices from "../../data/practice";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";
import PracticeListView from "../../components/PracticeListView";

function PracticeHome() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [matchedSubjects, setMatchedSubjects] = useState<Subject[]>(subjects);
  const [subjectKeyword, setSubjectKeyword] = useState("");
  const redirect = useRedirect();

  useEffect(() => {
    document.title = "PTIT Quizz | Ôn thi trắc nghiệm";
  }, []);

  const handleSelectPractice = (selectedItem: Practice) => {
    redirect("/practice-review/" + selectedItem.code);
  };

  useEffect(() => {
    if (!selectedSubject) {
      return;
    }
    if (
      !matchedSubjects
        .map((subject) => subject.code)
        .includes(selectedSubject.code)
    ) {
      setSelectedSubject(null);
    }
  }, [matchedSubjects]);

  function handleSearchSubject() {
    if (!subjectKeyword) {
      setMatchedSubjects(subjects);
      return;
    }
    setMatchedSubjects(
      subjects.filter((subject) =>
        subject.name.toLowerCase().includes(subjectKeyword.toLowerCase())
      )
    );
  }

  const matchedPractices = useMemo(() => {
    if (!selectedSubject) return [];
    return practices.filter(
      (practice) =>
        practice.subjectCode === selectedSubject.code && !practice.isHided
    );
  }, [selectedSubject]);

  const tags = useMemo(() => {
    return [
      "Ôn thi trắc nghiệm",
      "PTIT Quizz",
      "Hệ thống ôn thi trắc nghiệm",
      "Ngân hàng câu hỏi",
      ...subjects.map((subject) => subject.name),
    ];
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.headingContainer}>
            <h5 className={classes.heading}>Danh sách môn học</h5>
            <div className={classes.subjectSearchContainer}>
              <input
                className={classes.subjectSearchInput}
                placeholder={"Nhập từ khóa"}
                value={subjectKeyword}
                onChange={(e) => setSubjectKeyword(e.target.value)}
              />
              <span
                className={classes.searchButton}
                onClick={handleSearchSubject}
              >
                <IoIosSearch className={classes.searchIcon} />
              </span>
            </div>
          </div>
          <div className={classes.subjectListContainer}>
            {matchedSubjects.map((subject) => (
              <div
                key={subject.code}
                className={mergeClassNames(
                  classes.subject,
                  selectedSubject?.code === subject.code
                    ? classes.selectedSubject
                    : ""
                )}
                onClick={() => setSelectedSubject(subject)}
              >
                <SubjectIcon icon={subject.icon} />
                <span className={classes.subjectName}>{subject.name}</span>
              </div>
            ))}
          </div>
          <PracticeListView
            practices={matchedPractices}
            showError={!selectedSubject}
            errorMessage={"Chưa chọn môn học"}
          />
        </div>
      </div>
      <Tags tags={tags} className={classes.tagContainer} />
    </div>
  );
}

export default PracticeHome;
