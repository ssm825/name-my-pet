import React, { ReactNode } from "react";
import useResponsive from "../../hooks/useResponsive";
import * as Style from "./ResponsiveContainer.styles";

export interface ResponsiveType {
  $isDesktop: boolean;
  $isTablet: boolean;
  $isMobile: boolean;
}

interface ContainerProps {
  children: ReactNode;
}

const ResponsiveContainer = ({ children }: ContainerProps) => {
  const { $isDesktop, $isTablet, $isMobile } = useResponsive();

  return (
    <Style.Container
      $isDesktop={$isDesktop}
      $isTablet={$isTablet}
      $isMobile={$isMobile}
    >
      {children}
    </Style.Container>
  );
};

export default ResponsiveContainer;
