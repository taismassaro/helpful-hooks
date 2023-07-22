import { MutableRefObject, useEffect, useState } from "react";

function useIsOnscreen(element: MutableRefObject<HTMLElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(element.current);

    return () => observer.disconnect();
  }, [element]);

  return isOnScreen;
}

export default useIsOnscreen;
