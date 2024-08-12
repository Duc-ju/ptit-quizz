import React, { useState } from "react";
import LoadingButton from "../../components/LoadingButton";
import { addDocument } from "../../firebase/service";
import questions from "../../data/question/phap-luat-dai-cuong-theo-chuong";
import classes from "../PracticeHome/practiceHome.module.css";

function DataImport() {
  const [fetching, setFetching] = useState(false);
  const [importCount, setImportCount] = useState(0);

  async function handleImport() {
    try {
      setFetching(true);
      setImportCount(0);
      let count = 0;
      for (let question of questions) {
        await addDocument("questions", question);
        count++;
        setImportCount(count);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setFetching(false);
    }
  }

  return (
    <div className={classes.root}>
      <div className={classes.parent}>
        <div className={classes.container}>
          <h5 className={classes.heading}>Chức năng import dữ liệu</h5>
          <div>
            <div>Imported: {importCount} questions</div>
            <LoadingButton onClick={handleImport} fetching={fetching}>
              Import data
            </LoadingButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataImport;
