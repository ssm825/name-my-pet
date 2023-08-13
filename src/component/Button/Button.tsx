import React, { FC, ReactElement, ButtonHTMLAttributes } from "react";
import { ThemeColor } from "../../styles/theme";
import * as Style from "./Button.styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactElement | string;
  color?: keyof ThemeColor;
  $hoverColor?: keyof ThemeColor;
  width?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  color,
  $hoverColor,
  width,
  ...props
}) => {
  return (
    <Style.StyledButton
      color={color}
      $hoverColor={$hoverColor}
      width={width}
      {...props}
    >
      {children}
    </Style.StyledButton>
  );
};

export default Button;
