import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface HookProps {
  query: string;
}

const useResponsive = () => {
  const useBreakpoint = (settings: HookProps): boolean => {
    const [mounted, setMounted] = useState<boolean>(false);
    const value: boolean = useMediaQuery({ query: settings.query });
    useEffect(() => {
      setMounted(true);
    }, []);

    return mounted ? value : false;
  };
  const $isDesktop = useBreakpoint({ query: "(min-width:1024px)" });
  const $isTablet = useBreakpoint({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const $isMobile = useBreakpoint({ query: "(max-width:767px)" });

  return { $isDesktop, $isTablet, $isMobile };
};

export default useResponsive;
