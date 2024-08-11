import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  PRACTICE_TIME_CHAPTER,
  PRACTICE_TIME_RANGE,
  PracticeTime,
  Question,
  QuestionRange,
} from "../../models/multiple-question";
import { db } from "../../firebase/config";
import { toast } from "react-toastify";
import { useUserSelector } from "../../redux/selector";
import useRedirect from "../../hooks/useRedirect";
import PracticeSummaryCommon from "../../components/PracticeSummaryCommon";
import classes from "./practiceHistory.module.css";
import LoadingIcon from "../../components/LoadingIcon";
import {
  getQuestionsFromStorage,
  saveQuestionsToStorage,
} from "../../service/localStorageService";

function PracticeHistory() {
  const [practiceTime, setPracticeTime] = useState<PracticeTime | null>(null);
  const [questions, setQuestion] = useState<Question[]>([]);
  const [practiceTimeFetching, setPracticeTimeFetching] = useState(false);
  const [practiceTimeError, setPracticeTimeError] = useState(false);
  const [questionFetching, setQuestionFetching] = useState(false);

  useEffect(() => {
    document.title = "PTIT Quizz | Lịch sử ôn tập";
  }, []);

  const user = useUserSelector();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const redirect = useRedirect();

  useEffect(() => {
    if (practiceTime && questions) {
      const questionsCached = getQuestionsFromStorage(
        practiceTime.practiceId,
        practiceTime.type,
        practiceTime.questionRange,
        practiceTime.chapterIdx
      );
      if (!questionsCached) {
        saveQuestionsToStorage(
          practiceTime.practiceId,
          practiceTime.type,
          questions,
          practiceTime.questionRange,
          practiceTime.chapterIdx
        );
      }
    }
  }, [practiceTime, questions]);

  useEffect(() => {
    if (!id) return;
    if (!user) {
      redirect("/login", "Bạn cần đăng nhập để sử dụng tính năng này", "error");
      return;
    }
    setPracticeTimeFetching(true);
    db.collection("practice-times")
      .doc(id)
      .get()
      .then(async (doc) => {
        if (!doc.exists) {
          throw new Error("Lịch sử luyện tập không tồn tại");
        }
        const practiceTimeFetched = doc.data() as PracticeTime;
        practiceTimeFetched.id = doc.id;
        setPracticeTime(practiceTimeFetched);
        setPracticeTimeFetching(false);
        setQuestionFetching(true);
        if (!practiceTimeFetched.type) {
          return Promise.resolve([]);
        }
        const questionsCached = getQuestionsFromStorage(
          practiceTimeFetched.practiceId,
          practiceTimeFetched.type,
          practiceTimeFetched.questionRange,
          practiceTimeFetched.chapterIdx
        );
        if (questionsCached) return questionsCached;
        let questionQuery;
        const baseQuery = db
          .collection("questions")
          .where("practiceId", "==", practiceTimeFetched.practiceId)
          .orderBy("idx", "asc");
        if (practiceTimeFetched.type === PRACTICE_TIME_RANGE) {
          const questionRange =
            practiceTimeFetched.questionRange as QuestionRange;
          questionQuery = baseQuery
            .startAt(questionRange.startAt - 1)
            .endAt(questionRange.endAt - 1);
        } else if (practiceTimeFetched.type === PRACTICE_TIME_CHAPTER) {
          questionQuery = baseQuery.where(
            "chapterIdx",
            "==",
            practiceTimeFetched.chapterIdx
          );
        } else {
          questionQuery = baseQuery;
        }
        const snapshot = await questionQuery.get();
        return snapshot.docs.map((doc_1) => ({
          ...doc_1.data(),
          id: doc_1.id,
        }));
      })
      .then((questionsFetched) => {
        if (!questionsFetched || !questionsFetched.length) {
          toast.error("Không thể tải danh sách câu hỏi");
        }
        setQuestion(questionsFetched as Question[]);
        setQuestionFetching(false);
      })
      .catch((err) => {
        console.error(err);
        setPracticeTimeError(true);
        toast.error("Có lỗi xảy ra khi tải dữ liệu");
      })
      .finally(() => {
        setPracticeTimeFetching(false);
        setQuestionFetching(false);
      });
  }, [id, user]);

  if (
    !practiceTime ||
    practiceTimeFetching ||
    questionFetching ||
    practiceTimeError
  )
    return (
      <div className={classes.emptyWrapper}>
        {practiceTimeFetching || questionFetching ? (
          <LoadingIcon />
        ) : (
          <span>Không thể tải dữ liệu</span>
        )}
      </div>
    );

  return (
    <PracticeSummaryCommon
      practiceId={practiceTime.practiceId}
      practiceTitle={practiceTime.practiceTitle}
      practiceDescription={practiceTime.description}
      sufferIndexes={practiceTime.sufferIndexes}
      questions={questions}
      results={practiceTime.results || []}
      rightAnswerCount={practiceTime.numberOfRight}
      wrongAnswerCount={practiceTime.numberOfWrong}
      fromHistory={true}
      totalTime={practiceTime.totalTime}
    />
  );
}

export default PracticeHistory;
