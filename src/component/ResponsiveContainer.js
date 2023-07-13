import React from "react";
import useResponsive from "../hooks/useResponsive";
import styled from "styled-components";
import { Result } from "../styles/index.styles";

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
    width: ${({ $isTablet }) => $isTablet && "80%"};
  }

  Button {
    padding: ${({ $isTablet }) => $isTablet && "13px 0"};
  }

  input {
    padding: ${({ $isTablet }) => $isTablet && "13px 16px"};
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
