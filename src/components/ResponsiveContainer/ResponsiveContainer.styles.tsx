import styled, { css } from "styled-components";
import { Result } from "../../pages/Main/Main.styles";
import { ResponsiveType } from "./ResponsiveContainer";

export const Container = styled.div<ResponsiveType>`
  main {
    width: ${({ $isTablet }) => $isTablet && "60%"};
  }
  .en_title {
    ${({ $isMobile }) =>
      $isMobile &&
      css`
        font-size: 36px;
        line-height: 42px;
      `};
  }

  form {
    ${({ $isTablet }) =>
      $isTablet &&
      css`
        padding: 50px;
        width: 80%;
      `};
    padding: ${({ $isMobile }) => $isMobile && "35px"};
  }

  Button {
    padding: ${({ $isTablet }) => $isTablet && "13px 0"};
  }

  input {
    padding: ${({ $isTablet }) => $isTablet && "13px 16px"};
    ::placeholder {
      font-size: ${({ $isMobile }) => $isMobile && "12px"};
    }
  }

  ${Result} {
    width: ${({ $isTablet, $isMobile }) =>
      $isTablet ? "450px" : $isMobile ? "85%" : "380px"};
    padding: ${({ $isMobile }) => $isMobile && "70px 20px"};
  }
`;
