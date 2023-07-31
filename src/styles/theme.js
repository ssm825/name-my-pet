import { css } from "styled-components";

const color = {
  mainBlue: "#4cb2ee",
  mainBlack: "#202123",
  mainGray: "#c0c0c0",
};

const flex = (direction = "row", justify = "center", align = "center") => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
`;

const theme = {
  color,
  flex,
};
export default theme;
