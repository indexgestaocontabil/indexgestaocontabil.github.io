import { useCallback, useEffect, useRef } from "react";

const IS_DESKTOP = '(min-width: 680px)';
const IS_MOBILE = '(max-width: 680px)';

const useBreakpointObserver = () => {
  const isMobile = useRef<boolean>(window.matchMedia(IS_MOBILE).matches);
  const isDesktop = useRef<boolean>(window.matchMedia(IS_DESKTOP).matches);

  const calculateBreakpoints = useCallback(() => {
    isMobile.current = window.matchMedia(IS_MOBILE).matches;
    isDesktop.current = window.matchMedia(IS_DESKTOP).matches;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', calculateBreakpoints);

    return () => {
      window.removeEventListener('resize', calculateBreakpoints);
    }
  }, [calculateBreakpoints])

  return {
    isMobile: isMobile.current,
    isDesktop: isDesktop.current
  }
};

export default useBreakpointObserver;
