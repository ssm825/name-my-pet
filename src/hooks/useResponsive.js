import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const useBreakpoint = (settings) => {
    const [mounted, setMounted] = useState(false);
    const value = useMediaQuery(settings);
    useEffect(() => {
      setMounted(true);
    }, []);

    return mounted ? value : false;
  };
  const isDesktop = useBreakpoint({ minWidth: 1024 });
  const isTablet = useBreakpoint({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useBreakpoint({ maxWidth: 767 });

  return { isDesktop, isTablet, isMobile };
};

export default useResponsive;
