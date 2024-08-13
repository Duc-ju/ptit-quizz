import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
}

export default useScrollTop;
