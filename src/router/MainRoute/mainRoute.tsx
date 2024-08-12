import React, { lazy, Suspense, useEffect } from "react";
import classes from "./mainRoute.module.css";
import Header from "../../components/Header";
import { Route, Routes, useSearchParams } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";
import { toast } from "react-toastify";
import LoadingFallBack from "../../components/LoadingFallback";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { loadMasterFromStorage } from "../../redux/slices/masterSlice";
import { useColorsMasterSelector } from "../../redux/selector";
import Footer from "../../components/Footer";

const NotFound = lazy(() => import("../../features/NotFound"));
const PracticeHome = lazy(() => import("../../features/PracticeHome"));
const AboutPage = lazy(() => import("../../features/AboutPage"));
const PracticeControl = lazy(() => import("../../features/PracticeControl"));
const PracticeHistory = lazy(() => import("../../features/PracticeHistory"));
const PracticeReview = lazy(() => import("../../features/PracticeReview"));
const Authentication = lazy(() => import("../../features/Authentication"));

function MainRoute() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch<AppDispatch>();
  const colors = useColorsMasterSelector();
  useScrollTop();

  useEffect(() => {
    const type = searchParams.get("type");
    const message = searchParams.get("message");
    if ((message && type === "info") || type === "error") {
      toast[type](message);
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(loadMasterFromStorage());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      colors.primary
    );
    document.documentElement.style.setProperty(
      "--primary-10-color",
      colors.primary10
    );
    document.documentElement.style.setProperty(
      "--primary-15-color",
      colors.primary15
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      colors.secondary
    );
    document.documentElement.style.setProperty(
      "--tertiary-color",
      colors.tertiary
    );
    document.documentElement.style.setProperty("--info-color", colors.info);
    document.documentElement.style.setProperty(
      "--success-color",
      colors.success
    );
    document.documentElement.style.setProperty(
      "--success-10-color",
      colors.success15
    );
    document.documentElement.style.setProperty(
      "--success-15-color",
      colors.success15
    );
    document.documentElement.style.setProperty(
      "--warning-color",
      colors.warning
    );
    document.documentElement.style.setProperty("--grey-color", colors.grey);
    document.documentElement.style.setProperty(
      "--light-grey-color",
      colors.lightGrey
    );
    document.documentElement.style.setProperty(
      "--little-grey-color",
      colors.littleGrey
    );
    document.documentElement.style.setProperty(
      "--dark-grey-color",
      colors.darkGrey
    );
    document.documentElement.style.setProperty("--white", colors.white);
    document.documentElement.style.setProperty("--black", colors.black);
  }, [colors]);

  return (
    <Suspense fallback={<LoadingFallBack />}>
      <Header />
      <main className={classes.content}>
        <Routes>
          <Route path={""} element={<PracticeHome />} />
          <Route path="/login" element={<Authentication />} />
          <Route path="/register" element={<Authentication />} />
          <Route
            path={`/practice-review/:practiceCode`}
            element={<PracticeReview />}
          />
          <Route path={"/practice-control"} element={<PracticeControl />} />
          <Route path={"/practice-history"} element={<PracticeHistory />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default MainRoute;
