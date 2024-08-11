import React, { useEffect } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import SnowFlake from "./components/SnowFlake";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import MainRoute from "./router/MainRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  useEffect(() => {
    document.title = "PTIT Quizz";
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <SnowFlake />
        <div style={{ position: "relative" }}>
          <MainRoute />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
