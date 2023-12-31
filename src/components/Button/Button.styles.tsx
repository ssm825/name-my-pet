import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  /* common */
  padding: 12px 0;
  color: white;
  border: none;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;

  /* width */
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}

  /* background color */
  background-color: ${({ theme, color }) =>
    (color && theme.color[color]) || theme.color.mainBlue};

  ${({ theme, $hoverColor }) =>
    $hoverColor &&
    css`
      &:hover,
      &.select {
        background-color: ${theme.color[$hoverColor]};
      }
    `}
`;
