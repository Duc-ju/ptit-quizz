import React, { useEffect, useMemo, useState } from "react";
import { Practice, Subject } from "../../models/multiple-question";
import classes from "./practiceHome.module.css";
import mergeClassNames from "merge-class-names";
import useRedirect from "../../hooks/useRedirect";
import SubjectIcon from "./SubjectIcon";
import { GoTasklist } from "@react-icons/all-files/go/GoTasklist";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import Tags from "../../components/Tags";
import subjects from "../../data/subject";
import practices from "../../data/practice";
import { MdHistory } from "@react-icons/all-files/md/MdHistory";
import { IoIosSearch } from "@react-icons/all-files/io/IoIosSearch";

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
          <h5 className={classes.heading}>Danh sách bài luyện tập</h5>
          {matchedPractices.length === 0 || !selectedSubject ? (
            <div className={classes.emptyWrapper}>
              <span className={classes.emptyMessage}>
                {selectedSubject
                  ? "Danh sách bài ôn tập trống"
                  : "Chưa chọn môn học"}
              </span>
            </div>
          ) : (
            <div className={classes.practiceList}>
              {matchedPractices.map((practice) => (
                <div
                  key={practice.code}
                  className={classes.practice}
                  onClick={() => handleSelectPractice(practice)}
                >
                  <span className={classes.practiceTitle}>
                    {practice.title}
                  </span>
                  <span className={classes.practiceDescription}>
                    {practice.description}
                  </span>
                  <div className={classes.practiceInfoContainer}>
                    <div className={classes.numberContainer}>
                      <MdHistory className={classes.historyIcon} />
                      <span className={classes.number}>{`${
                        practice.numberOfPracticed || 0
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Tags tags={tags} className={classes.tagContainer} />
    </div>
  );
}

export default PracticeHome;
