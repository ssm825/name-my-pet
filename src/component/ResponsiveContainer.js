import React from "react";
import useResponsive from "../hooks/useResponsive";
import styled from "styled-components";
import { Result } from "../pages/index.styles";

const Container = styled.div`
  main {
    width: ${({ $isTablet }) => $isTablet && "60%"};
  }
  .en_title {
    font-size: ${({ $isMobile }) => $isMobile && "36px"};
    line-height: ${({ $isMobile }) => $isMobile && "42px"};
  }
  form {
    padding: ${({ $isTablet }) => $isTablet && "50px"};
    width: ${({ $isTablet }) => $isTablet && "100%"};
  }

  Button {
    padding: ${({ $isTablet }) => $isTablet && "15px 0"};
  }

  ${Result} {
    width: ${({ $isTablet, $isMobile }) =>
      $isTablet ? "450px" : $isMobile ? "85%" : "380px"};
  }
`;

const ResponsiveContainer = ({ children }) => {
  const { isDesktop, isTablet, isMobile } = useResponsive();

  return (
    <Container $isDesktop={isDesktop} $isTablet={isTablet} $isMobile={isMobile}>
      {children}
    </Container>
  );
};

export default ResponsiveContainer;
