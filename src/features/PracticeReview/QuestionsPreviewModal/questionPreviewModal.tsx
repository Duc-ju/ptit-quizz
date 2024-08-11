import React, { useState } from "react";
import classes from "./questionsPreviewModal.module.css";
import LoadingButton from "../../../components/LoadingButton";
import { useQuestionsPreviewDataSelector } from "../../../redux/selector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import ReactModal from "react-modal";
import Modal from "react-modal";
import { hideQuestionsPreview } from "../../../redux/slices/practiceRoomSlice";
import QuestionReview from "../../../components/QuestionReview";
import ControlledSwitch from "../../../components/ControlledSwitch";

Modal.setAppElement("#root");

function QuestionPreviewModal() {
  const [hideKey, setHideKey] = useState(true);
  const { visible, questions } = useQuestionsPreviewDataSelector();
  const dispatch = useDispatch<AppDispatch>();

  function closeQuestionsPreviewPopup() {
    dispatch(hideQuestionsPreview());
  }

  return (
    <ReactModal
      isOpen={visible}
      onRequestClose={closeQuestionsPreviewPopup}
      shouldCloseOnOverlayClick={true}
      style={{
        content: {
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          width: "1000px",
          maxWidth: "95vw",
          height: "80vh",
          maxHeight: "80vh",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          zIndex: 1000,
        },
      }}
    >
      <div className={classes.root}>
        <h2 className={classes.heading}>Xem trước câu hỏi</h2>
        <div className={classes.container}>
          <div className={classes.hideKeyContainer}>
            <h5 className={classes.hideKeyTitle}>Hiển thị đáp án</h5>
            <ControlledSwitch
              checked={!hideKey}
              onChange={(e) => setHideKey(!e.target.checked)}
            />
          </div>
          <div className={classes.questionList}>
            {questions.map((question, index) => (
              <QuestionReview
                key={question.id}
                question={question}
                index={index}
                hideKey={hideKey}
              />
            ))}
          </div>
          <div className={classes.buttonContainer}>
            <LoadingButton
              className={classes.cancelButton}
              onClick={closeQuestionsPreviewPopup}
            >
              Đóng
            </LoadingButton>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default QuestionPreviewModal;
