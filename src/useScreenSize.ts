import { useEffect, useState } from "react";

function useScreenSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener(
      "resize",
      handleResize
    );

    handleResize();

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);
  return windowSize;
}
export default useScreenSize;

export function useScreenWidth() {
  const { width } = useScreenSize();
  return width;
}

export function useScreenHeight() {
  const { height } = useScreenSize();
  return height;
}
