import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Chapter,
  Practice,
  PRACTICE_TIME_ALL,
  PRACTICE_TIME_CHAPTER,
  PRACTICE_TIME_RANGE,
  PracticeTime,
  PracticeType,
  Question,
  QuestionRange,
} from "../../models/multiple-question";
import {
  initRoom,
  MAX_QUESTION_TIME_DEFAULT,
  RESULT_TIME_DEFAULT,
  showQuestionsPreview,
} from "../../redux/slices/practiceRoomSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useNavigate, useParams } from "react-router-dom";
import {
  useMasterPracticeTimeCountMap,
  useUserSelector,
} from "../../redux/selector";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import useRedirect from "../../hooks/useRedirect";
import PracticeTimeList from "./PracticeTimeList/practiceTimeList";
import LoadingButton from "../../components/LoadingButton";
import classes from "./practiceReview.module.css";
import mergeClassNames from "merge-class-names";
import { MdHistory } from "@react-icons/all-files/md/MdHistory";
import { GoListUnordered } from "@react-icons/all-files/go/GoListUnordered";
import { GoTasklist } from "@react-icons/all-files/go/GoTasklist";
import ControlledSwitch from "../../components/ControlledSwitch";
import { IoList } from "@react-icons/all-files/io5/IoList";
import QuestionPreviewModal from "./QuestionsPreviewModal";
import Tags from "../../components/Tags";
import useHideFooter from "../../hooks/useHideFooter";
import PracticeHome from "../PracticeHome";
import {
  getQuestionsFromStorage,
  saveQuestionsToStorage,
} from "../../service/localStorageService";
import practices from "../../data/practice";
import PracticeListView from "../../components/PracticeListView";
import subjects from "../../data/subject";
import useHideSnowFlakeButton from "../../hooks/useHideSnowFlakeButton";

function PracticeReview() {
  const [practice, setPractice] = useState<Practice | null>(null);
  const [groupByChapter, setGroupByChapter] = useState(false);
  const [numberOfQuestionPerGroup, setNumberOfQuestionPerGroup] = useState<
    number | "OFF"
  >(50);
  const [practiceType, setPracticeType] = useState<PracticeType>("SEQUENCE");
  const [maxQuestionTime, setMaxQuestionTime] = useState<number | "OFF">(
    MAX_QUESTION_TIME_DEFAULT
  );
  const [maxResultTime, setMaxResultTime] = useState<number | "OFF">(
    RESULT_TIME_DEFAULT
  );
  const [showAnswerAfterQuestion, setShowAnswerAfterQuestion] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [selectedQuestionRange, setSelectedQuestionRange] =
    useState<QuestionRange | null>(null);
  const [initRoomFetching, setInitRoomFetching] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { practiceCode } = useParams();
  const [practiceError, setPracticeError] = useState(false);
  const [practiceTimes, setPracticeTimes] = useState<PracticeTime[]>([]);
  const [practiceTimeFetching, setPracticeTimeFetching] = useState(false);
  const [practiceTimeError, setPracticeTimeError] = useState(true);
  const [previewFetching, setPreviewFetching] = useState(false);
  const [suffer, setSuffer] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const user = useUserSelector();
  const redirect = useRedirect();
  const navigate = useNavigate();
  const practiceTimeCountMap = useMasterPracticeTimeCountMap();
  useHideFooter();
  useHideSnowFlakeButton();

  useEffect(() => {
    document.title = practice
      ? `PTIT Quizz | ${practice.title}`
      : "PTIT Quizz | Ôn thi trắc nghiệm";
  }, [practice]);

  useEffect(() => {
    setSelectedQuestionRange(null);
    setSelectedChapter(null);
    handleRefreshPractice();
  }, [practiceCode]);

  const handleRefreshPractice = useCallback(() => {
    if (!practiceCode) {
      return;
    }
    const filteredPractice = practices.find(
      (practice) => practice.code === practiceCode
    );
    if (!filteredPractice) {
      setPracticeError(true);
      toast.error("Không thể tải đề luyện tập");
    } else {
      setPractice(filteredPractice);
    }
  }, [practiceCode]);

  const subject = useMemo(() => {
    if (!practice) return null;
    return (
      subjects.find((subject) => subject.code === practice.subjectCode) || null
    );
  }, [practice]);

  const practicesWithSameSubject = useMemo(() => {
    if (!practice) {
      return [];
    }
    return practices.filter(
      (masterPractice) =>
        masterPractice.code !== practiceCode &&
        masterPractice.subjectCode === practice.subjectCode
    );
  }, [practice]);

  const recommendPractices = useMemo(() => {
    if (!practice) {
      return [];
    }
    return practices
      .filter((masterPractice) => masterPractice.code !== practiceCode)
      .sort(() => 0.5 - Math.random())
      .slice(0, 10);
  }, [practice]);

  const handleRefreshPracticeTime = useCallback(() => {
    if (!practiceCode || !user) {
      return;
    }
    setPracticeTimeFetching(true);
    db.collection("practice-times")
      .where("practiceCode", "==", practiceCode)
      .where("uid", "==", user.uid)
      .orderBy("createAt", "desc")
      .limit(10)
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
      })
      .then((practiceTimes) => {
        setPracticeTimes(practiceTimes as PracticeTime[]);
        setPracticeTimeError(false);
      })
      .catch((err) => {
        console.error(err);
        setPracticeTimeError(true);
        toast.error("Không thể tải lịch sử luyện tập");
      })
      .finally(() => setPracticeTimeFetching(false));
  }, [practiceCode, user]);

  const getFilterType = () => {
    if (!groupByChapter && selectedQuestionRange) {
      return PRACTICE_TIME_RANGE;
    }
    if (groupByChapter && selectedChapter) {
      return PRACTICE_TIME_CHAPTER;
    }
    return PRACTICE_TIME_ALL;
  };

  const getFilteredQuestions = async () => {
    if (!practice) return;
    let questionQuery;
    const baseQuery = db
      .collection("questions")
      .where("practiceCode", "==", practiceCode)
      .orderBy("idx", "asc");
    if (!groupByChapter && selectedQuestionRange) {
      questionQuery = baseQuery
        .startAt(selectedQuestionRange.startAt - 1)
        .endAt(selectedQuestionRange.endAt - 1);
    } else if (groupByChapter && selectedChapter) {
      questionQuery = baseQuery.where("chapterIdx", "==", selectedChapter.idx);
    } else {
      questionQuery = baseQuery;
    }
    const snapshot = await questionQuery.get();
    return snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  };

  const handleStartControl = () => {
    if (!practice || initRoomFetching || !practiceCode) return;
    if (!user) {
      redirect("/login");
      return;
    }
    if (
      !selectedQuestionRange &&
      !selectedChapter &&
      !(!groupByChapter && numberOfQuestionPerGroup === "OFF")
    ) {
      toast.error("Vui lòng chọn chương hoặc bộ câu hỏi");
      return;
    }
    const type = getFilterType();
    const startRoom = (questions: Question[]) => {
      dispatch(
        initRoom({
          practice,
          practiceDescription: selectedQuestionRange
            ? `Câu hỏi số ${selectedQuestionRange.startAt}-${selectedQuestionRange.endAt}`
            : selectedChapter
            ? selectedChapter.title
            : `Tất cả ${practice.numberOfQuestion} câu hỏi`,
          questions: questions as Question[],
          config: {
            maxResultTime,
            maxQuestionTime,
            showQuestionKeyAfterQuestionEnd: showAnswerAfterQuestion,
            type: type,
            chapterIdx: selectedChapter?.idx,
            questionRange: selectedQuestionRange ?? undefined,
            suffer,
            showNotification,
            practiceType,
          },
        })
      );
      navigate("/practice-control");
    };
    const questionsCached = getQuestionsFromStorage(
      practiceCode,
      type,
      selectedQuestionRange,
      selectedChapter?.idx
    );
    if (questionsCached) {
      startRoom(questionsCached);
      return;
    }
    setInitRoomFetching(true);
    getFilteredQuestions()
      .then((questions) => {
        if (!questions || !questions.length) {
          toast.error("Không thể tải danh sách câu hỏi");
        }
        saveQuestionsToStorage(
          practiceCode,
          type,
          questions as Question[],
          selectedQuestionRange,
          selectedChapter?.idx
        );
        startRoom(questions as Question[]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Không thể tải danh sách câu hỏi");
      })
      .finally(() => setInitRoomFetching(false));
  };

  const questionRangeList = useMemo(() => {
    if (!practice || numberOfQuestionPerGroup === "OFF") return [];
    let res: QuestionRange[] = [];
    for (
      let i: number = 0;
      i * numberOfQuestionPerGroup < practice.numberOfQuestion;
      i++
    ) {
      res.push({
        startAt: i * numberOfQuestionPerGroup + 1,
        endAt:
          (i + 1) * numberOfQuestionPerGroup > practice.numberOfQuestion
            ? practice.numberOfQuestion
            : (i + 1) * numberOfQuestionPerGroup,
      });
    }
    return res;
  }, [practice, numberOfQuestionPerGroup]);

  function handleChangeGroupByChapter(value: boolean) {
    setGroupByChapter(value);
    setSelectedChapter(null);
    setSelectedQuestionRange(null);
  }

  function handleChangeNumberOfQuestionPerGroup(value: any) {
    setNumberOfQuestionPerGroup(value);
    setSelectedQuestionRange(null);
  }

  function handleQuestionsPreview() {
    if (!user) {
      redirect("/login");
      return;
    }
    if (initRoomFetching || !practice || !practiceCode) return;
    if (
      !selectedQuestionRange &&
      !selectedChapter &&
      !(!groupByChapter && numberOfQuestionPerGroup === "OFF")
    ) {
      toast.error("Vui lòng chọn chương hoặc bộ câu hỏi");
      return;
    }
    const type = getFilterType();
    const questionsCached = getQuestionsFromStorage(
      practiceCode,
      type,
      selectedQuestionRange,
      selectedChapter?.idx
    );
    if (questionsCached) {
      dispatch(showQuestionsPreview(questionsCached));
      return;
    }
    setPreviewFetching(true);
    getFilteredQuestions()
      .then((questions) => {
        if (!questions || !questions.length) {
          toast.error("Không thể tải danh sách câu hỏi");
          throw new Error("Không thể tải danh sách câu hỏi");
        }
        saveQuestionsToStorage(
          practiceCode,
          type,
          questions as Question[],
          selectedQuestionRange,
          selectedChapter?.idx
        );
        dispatch(showQuestionsPreview(questions as Question[]));
      })
      .catch((err) => console.error(err))
      .finally(() => setPreviewFetching(false));
  }

  if (!practiceCode) return <PracticeHome />;

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            {practiceError ? (
              <div className={classes.emptyWrapper} style={{ height: 100 }}>
                <LoadingButton onClick={handleRefreshPractice}>
                  Tải lại
                </LoadingButton>
              </div>
            ) : (
              <div className={classes.practice}>
                <div className={classes.iconImage}>
                  <img
                    className={classes.practiceImage}
                    src={`/image/practice/${practice?.code}.webp`}
                    alt={practice?.title}
                  />
                </div>
                <div className={classes.practiceInfo}>
                  <h2 className={classes.practiceTitle}>{practice?.title}</h2>
                  <span className={classes.practiceDescription}>
                    {practice?.description}
                  </span>
                  {practice?.author ? (
                    <span
                      className={classes.practiceAuthor}
                    >{`Nguồn: ${practice.author}`}</span>
                  ) : null}
                  <div className={classes.practiceInfoContainer}>
                    <div className={classes.numberContainer}>
                      <MdHistory className={classes.historyIcon} />
                      <span className={classes.number}>{`${
                        practice && practiceTimeCountMap
                          ? practiceTimeCountMap[practice.code] || 0
                          : 0
                      } đã làm`}</span>
                    </div>
                    {practice?.chapters ? (
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
                        practice?.numberOfQuestion || 0
                      } câu hỏi`}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={classes.practiceConfig}>
              <h5 className={classes.practiceTitle}>
                Thiết lập phòng luyện tập
              </h5>
              <div className={classes.configContainer}>
                {practiceError ? (
                  <div className={classes.emptyWrapper} style={{ height: 120 }}>
                    <LoadingButton onClick={handleRefreshPractice}>
                      Tải lại
                    </LoadingButton>
                  </div>
                ) : (
                  <>
                    {practice?.chapters && practice.chapters.length ? (
                      <>
                        <div className={classes.configItem}>
                          <span className={classes.configLabel}>
                            Luyện tập theo chương
                          </span>
                          <ControlledSwitch
                            checked={groupByChapter}
                            onChange={(e) =>
                              handleChangeGroupByChapter(e.target.checked)
                            }
                          />
                        </div>
                        {groupByChapter ? (
                          <>
                            <div className={classes.chapterConfigItem}>
                              <span className={classes.configLabel}>
                                Chọn chương
                              </span>
                              <div className={classes.chapterListContainer}>
                                {practice.chapters.map((item) => (
                                  <div
                                    className={mergeClassNames(
                                      classes.chapter,
                                      item.idx === selectedChapter?.idx
                                        ? classes.borderPrimary
                                        : ""
                                    )}
                                    onClick={() => setSelectedChapter(item)}
                                    key={item.idx}
                                  >
                                    <span
                                      className={mergeClassNames(
                                        classes.chapterTitle,
                                        item.idx === selectedChapter?.idx
                                          ? classes.colorPrimary
                                          : ""
                                      )}
                                    >
                                      {item.title}
                                    </span>
                                    <div className={classes.numberContainer}>
                                      <IoList
                                        className={mergeClassNames(
                                          classes.chapterQuestionCountIcon,
                                          item.idx === selectedChapter?.idx
                                            ? classes.colorPrimary
                                            : ""
                                        )}
                                      />
                                      <span
                                        className={mergeClassNames(
                                          classes.number,
                                          item.idx === selectedChapter?.idx
                                            ? classes.colorPrimary
                                            : classes.colorGray
                                        )}
                                      >{`${
                                        item.numberOfQuestion || 0
                                      } câu hỏi`}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            {selectedChapter?.idx !== null &&
                            selectedChapter?.idx !== undefined &&
                            practice.chapters[selectedChapter.idx]
                              .description ? (
                              <div className={classes.chapterDescription}>
                                <span
                                  className={classes.chapterDescriptionTitle}
                                >
                                  Nội dung chương:{" "}
                                </span>{" "}
                                <span>
                                  {
                                    practice.chapters[selectedChapter.idx]
                                      .description
                                  }
                                </span>
                              </div>
                            ) : null}
                          </>
                        ) : null}
                      </>
                    ) : null}
                    {!groupByChapter ||
                    !practice?.chapters ||
                    !practice.chapters.length ? (
                      <>
                        <div className={classes.configItem}>
                          <span className={classes.configLabel}>
                            Chọn số lượng câu hỏi
                          </span>
                          <select
                            value={numberOfQuestionPerGroup}
                            onChange={(e) =>
                              handleChangeNumberOfQuestionPerGroup(
                                e.target.value
                              )
                            }
                          >
                            {[
                              {
                                value: 20,
                                label: "20",
                              },
                              {
                                value: 50,
                                label: "50",
                              },
                              {
                                value: 75,
                                label: "75",
                              },
                              {
                                value: 100,
                                label: "100",
                              },
                            ].map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {numberOfQuestionPerGroup !== "OFF" ? (
                          <div className={classes.questionRangeConfigItem}>
                            <span className={classes.configLabel}>
                              Chọn bộ câu hỏi
                            </span>
                            <div className={classes.questionRangeListContainer}>
                              {questionRangeList.map((item) => (
                                <div
                                  className={mergeClassNames(
                                    classes.questionRange,
                                    item.startAt ===
                                      selectedQuestionRange?.startAt
                                      ? classes.borderPrimary
                                      : ""
                                  )}
                                  onClick={() => setSelectedQuestionRange(item)}
                                  key={item.endAt}
                                >
                                  <span
                                    className={mergeClassNames(
                                      classes.questionRangeLabel,
                                      item.startAt ===
                                        selectedQuestionRange?.startAt
                                        ? classes.colorPrimary
                                        : ""
                                    )}
                                  >{`Câu ${item.startAt} - ${item.endAt}`}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </>
                    ) : null}
                  </>
                )}
                <div className={classes.configItem}>
                  <span className={classes.configLabel}>Kiểu hiển thị</span>
                  <select
                    value={practiceType}
                    onChange={(e) =>
                      setPracticeType(e.target.value as PracticeType)
                    }
                  >
                    {[
                      {
                        value: "SEQUENCE",
                        label: "Trả lời tuần tự từng câu hỏi",
                      },
                      {
                        value: "FLAT",
                        label: "Hiển thị toàn bộ câu hỏi",
                      },
                    ].map((item) => (
                      <option key={item.value} value={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                {practiceType === "SEQUENCE" ? (
                  <div className={classes.configItem}>
                    <span className={classes.configLabel}>
                      Thời gian đếm ngược câu hỏi
                    </span>
                    <select
                      value={maxQuestionTime}
                      onChange={(e) =>
                        setMaxQuestionTime(
                          e.target.value === "OFF"
                            ? e.target.value
                            : parseInt(e.target.value)
                        )
                      }
                    >
                      {[
                        {
                          value: 20,
                          label: "20s",
                        },
                        {
                          value: 30,
                          label: "30s",
                        },
                        {
                          value: 50,
                          label: "50s",
                        },
                        {
                          value: "OFF",
                          label: "Tắt",
                        },
                      ].map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
                {practiceType === "SEQUENCE" ? (
                  <div className={classes.configItem}>
                    <span className={classes.configLabel}>
                      Hiển thị đáp án sau câu hỏi
                    </span>
                    <ControlledSwitch
                      checked={showAnswerAfterQuestion}
                      onChange={(e) =>
                        setShowAnswerAfterQuestion(e.target.checked)
                      }
                    />
                  </div>
                ) : null}
                <div className={classes.configItem}>
                  <span className={classes.configLabel}>Xáo trộn câu hỏi</span>
                  <ControlledSwitch
                    checked={suffer}
                    onChange={(e) => setSuffer(e.target.checked)}
                  />
                </div>
                {practiceType === "SEQUENCE" ? (
                  <div className={classes.configItem}>
                    <span className={classes.configLabel}>
                      Hiển thị thông báo
                    </span>
                    <ControlledSwitch
                      checked={showNotification}
                      onChange={(e) => setShowNotification(e.target.checked)}
                    />
                  </div>
                ) : null}
                {practiceType === "SEQUENCE" ? (
                  <div className={classes.configItem}>
                    <span className={classes.configLabel}>
                      Thời gian tự động chuyển câu hỏi
                    </span>
                    <select
                      value={maxResultTime}
                      onChange={(e) =>
                        setMaxResultTime(
                          e.target.value === "OFF"
                            ? e.target.value
                            : parseInt(e.target.value)
                        )
                      }
                    >
                      {[
                        {
                          value: 10,
                          label: "10s",
                        },
                        {
                          value: 20,
                          label: "20s",
                        },
                        {
                          value: 30,
                          label: "30s",
                        },
                        {
                          value: 50,
                          label: "50s",
                        },
                        {
                          value: "OFF",
                          label: "Tắt",
                        },
                      ].map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : null}
              </div>
            </div>
            {user ? (
              <div className={classes.practiceConfig}>
                <h5 className={classes.practiceTitle}>Lịch sử luyện tập</h5>
                <PracticeTimeList
                  practiceTimes={practiceTimes}
                  fetching={practiceTimeFetching}
                  error={practiceTimeError}
                  className={classes.practiceTimeContainer}
                  handleRefresh={handleRefreshPracticeTime}
                />
              </div>
            ) : null}
            {practicesWithSameSubject.length > 0 && subject ? (
              <PracticeListView
                className={classes.practiceList}
                practices={practicesWithSameSubject}
                title={`Đề luyện tập khác cho môn ${subject.name}`}
              />
            ) : null}
            {recommendPractices.length > 0 ? (
              <PracticeListView
                className={classes.practiceList}
                practices={recommendPractices}
                title={"Gợi ý luyện tập thêm"}
              />
            ) : null}
          </div>
          <div className={classes.actionContainer}>
            <LoadingButton
              fetching={previewFetching}
              onClick={handleQuestionsPreview}
              className={classes.previewButton}
            >
              Xem trước câu hỏi
            </LoadingButton>
            <LoadingButton
              fetching={initRoomFetching}
              onClick={handleStartControl}
              className={classes.startButton}
            >
              {user ? "Bắt đầu" : "Đăng nhập để bắt đầu"}
            </LoadingButton>
          </div>
          <Tags
            tags={[
              "Ôn thi trắc nghiệm",
              "PTIT Quizz",
              "Hệ thống ôn thi trắc nghiệm",
              "Ngân hàng câu hỏi",
              practice?.title,
            ]}
            className={classes.tagContainer}
          />
        </div>
      </div>
      <QuestionPreviewModal />
    </div>
  );
}

export default PracticeReview;
