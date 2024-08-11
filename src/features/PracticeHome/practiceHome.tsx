import React, { useEffect, useMemo, useState } from "react";
import { Practice, PracticeSubject } from "../../models/multiple-question";
import classes from "./practiceHome.module.css";
// @ts-ignore
import mergeClassNames from "merge-class-names";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import LoadingButton from "../../components/LoadingButton";
import useRedirect from "../../hooks/useRedirect";
import LoadingIcon from "../../components/LoadingIcon";
import SubjectIcon from "./SubjectIcon";
import { MdHistory } from "@react-icons/all-files/md/MdHistory";
import { GoTasklist } from "@react-icons/all-files/go/GoTasklist";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import Tags from "../../components/Tags";

function PracticeHome() {
  const [subjectFetching, setSubjectFetching] = useState(false);
  const [subjectError, setSubjectError] = useState(false);
  const [subjects, setSubjects] = useState<PracticeSubject[]>([]);
  const [selectedSubject, setSelectedSubject] =
    useState<PracticeSubject | null>(null);
  const [practiceFetching, setPracticeFetching] = useState(false);
  const [practiceError, setPracticeError] = useState(false);
  const [practices, setPractices] = useState<Practice[]>([]);
  const redirect = useRedirect();

  useEffect(() => {
    document.title = "PTIT Quizz | Ôn thi trắc nghiệm";
  }, []);

  useEffect(() => {
    handleSubjectRefresh();
  }, []);

  const handleSubjectRefresh = () => {
    setSubjectFetching(true);
    db.collection("practice-subjects")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      })
      .then((res) => {
        setSubjects(res as PracticeSubject[]);
        setSelectedSubject(null);
        setPractices([]);
        setSubjectError(false);
      })
      .catch((e) => {
        console.log(e);
        setSubjectError(true);
        toast.error("Không thể tải danh sách môn học");
      })
      .finally(() => {
        setSubjectFetching(false);
      });
  };

  useEffect(() => {
    handlePracticeRefresh();
  }, [selectedSubject]);

  const handlePracticeRefresh = () => {
    if (!selectedSubject || practiceFetching) return;
    setPracticeFetching(true);
    db.collection("practices")
      .where("practiceSubjectId", "==", selectedSubject.id)
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      })
      .then((res) => {
        setPractices(res as Practice[]);
        setPracticeError(false);
      })
      .catch((e) => {
        console.log(e);
        setPracticeError(true);
        toast.error("Không thể tải danh sách bài luyện tập");
      })
      .finally(() => {
        setPracticeFetching(false);
      });
  };

  const handleSelectPractice = (selectedItem: Practice) => {
    redirect("/practice-review/?id=" + selectedItem.id);
  };

  const tags = useMemo(() => {
    return [
      "Ôn thi PTIT",
      "Ôn thi trắc nghiệm",
      "PTIT Quizz",
      "Trắc nghiệm PTIT",
      "Hệ thống ôn thi trắc nghiệm",
      "Ngân hàng câu hỏi",
      ...subjects.map((subject) => subject.name),
    ];
  }, [subjects]);

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <h5 className={classes.heading}>Danh sách môn học</h5>
          {subjectFetching ? (
            <div className={classes.emptyWrapper}>
              <LoadingIcon />
            </div>
          ) : subjectError ? (
            <div className={classes.emptyWrapper}>
              <LoadingButton
                onClick={handleSubjectRefresh}
                fetching={subjectFetching}
              >
                Tải lại
              </LoadingButton>
            </div>
          ) : (
            <div className={classes.subjectListContainer}>
              {subjectFetching ? (
                <LoadingIcon />
              ) : subjects.length === 0 ? (
                <div className={classes.emptyWrapper}>
                  <span className={classes.emptyMessage}>
                    Danh sách môn học trống
                  </span>
                </div>
              ) : (
                subjects.map((subject) => (
                  <div
                    key={subject.id}
                    className={mergeClassNames(
                      classes.subject,
                      selectedSubject?.id === subject.id
                        ? classes.selectedSubject
                        : ""
                    )}
                    onClick={() => setSelectedSubject(subject)}
                  >
                    <SubjectIcon icon={subject.icon} />
                    <span className={classes.subjectName}>{subject.name}</span>
                  </div>
                ))
              )}
            </div>
          )}
          <h5 className={classes.heading}>Danh sách bài luyện tập</h5>
          {practiceFetching ? (
            <div className={classes.emptyWrapper}>
              <LoadingIcon />
            </div>
          ) : practiceError ? (
            <div className={classes.emptyWrapper}>
              <LoadingButton
                onClick={handlePracticeRefresh}
                fetching={practiceFetching}
              >
                Tải lại
              </LoadingButton>
            </div>
          ) : practices.length === 0 || !selectedSubject ? (
            <div className={classes.emptyWrapper}>
              <span className={classes.emptyMessage}>
                {selectedSubject
                  ? "Danh sách bài ôn tập trống"
                  : "Chưa chọn môn học"}
              </span>
            </div>
          ) : (
            <div className={classes.practiceList}>
              {practices.map((practice) => (
                <div
                  key={practice.id}
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
