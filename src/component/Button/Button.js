import styled, { css } from "styled-components";

const StyledButton = styled.button`
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
    theme.color[color] || theme.color.mainBlue};

  ${({ theme, $hoverColor }) =>
    $hoverColor &&
    css`
      &:hover,
      &.select {
        background-color: ${theme.color[$hoverColor]};
      }
    `}
`;

const Button = ({ children, color, $hoverColor, width, ...props }) => {
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
