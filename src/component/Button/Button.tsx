import React, { FC, ReactElement, ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { ThemeColor } from "../../styles/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  color?: keyof ThemeColor;
  $hoverColor?: keyof ThemeColor;
  width?: string;
}

const StyledButton = styled.button<ButtonProps>`
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

const Button: FC<ButtonProps> = ({
  children,
  color,
  $hoverColor,
  width,
  ...props
}) => {
  return (
    <StyledButton
      color={color}
      $hoverColor={$hoverColor}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
