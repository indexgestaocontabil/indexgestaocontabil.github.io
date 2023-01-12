import { useLayoutEffect, useState } from 'react';

const BREAKPOINT_MOBILE_TO_DESKTOP = 768;

const checkDesktopBreakpoint = () =>
  window.innerWidth > BREAKPOINT_MOBILE_TO_DESKTOP;

const checkMobileBreakpoint = () =>
  window.innerWidth <= BREAKPOINT_MOBILE_TO_DESKTOP;

const useBreakpointObserver = () => {
  const [isMobile, setIsMobile] = useState<boolean>(checkMobileBreakpoint());
  const [isDesktop, setIsDesktop] = useState<boolean>(checkDesktopBreakpoint());

  useLayoutEffect(() => {
    function handleResize() {
      const newMobileStatus = checkMobileBreakpoint();
      if (newMobileStatus !== isMobile) {
        setIsMobile(newMobileStatus);
      }

      const newDesktopStatus = checkDesktopBreakpoint();
      if (newDesktopStatus !== isDesktop) {
        setIsDesktop(newDesktopStatus);
      }
    }

    // First Execution
    handleResize();

    // Start Watching
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [isDesktop, isMobile]);

  return {
    isMobile,
    isDesktop,
  };
};

export default useBreakpointObserver;
