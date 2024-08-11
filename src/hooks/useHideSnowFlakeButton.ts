import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  hideSnowFlakeButton,
  showSnowFlakeButton,
} from "../redux/slices/masterSlice";

const useHideSnowFlakeButton = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(hideSnowFlakeButton());

    return () => {
      showSnowFlakeButton();
    };
  }, [dispatch]);
};

export default useHideSnowFlakeButton;
