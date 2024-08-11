import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { hideFooter, showFooter } from "../redux/slices/masterSlice";

const useHideFooter = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(hideFooter());

    return () => {
      dispatch(showFooter());
    };
  }, [dispatch]);
};

export default useHideFooter;
