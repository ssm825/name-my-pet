import { css } from "styled-components";

const color = {
  mainBlue: "#6ebae7",
  mainBlack: "#202123",
  mainGray: "#d1d1d1",
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
