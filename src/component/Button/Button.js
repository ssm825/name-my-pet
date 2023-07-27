import styled from "styled-components";

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
      width: ${width}px;
    `}

  /* background color */
  background-color: ${({ theme, color }) =>
    theme.color[color] || theme.color.mainBlue};
  &:hover,
  &.select {
    ${({ theme, hoverColor }) =>
      hoverColor &&
      css`
        background-color: ${theme.color[hoverColor]};
      `}
  }
`;

const Button = ({ children, color, hoverColor, width, ...props }) => {
  return (
    <StyledButton
      color={color}
      hoverColor={hoverColor}
      width={width}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
