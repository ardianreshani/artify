import { useEffect } from "react";
import { useLocation, useLocatione } from "react-router-dom";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return <div></div>;
};

export default ScrollTop;
