import styled from "styled-components";

export const Modal = styled.div`
  ${(props) => props.theme.flex("", "center", "center")};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.65);
`;

export const Result = styled.div`
  margin-top: 40px;
  padding: 75px 35px;
  width: 380px;
  min-height: 250px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 8px 8px 20px rgba(70, 88, 83, 0.05);
  text-align: center;
  font-weight: bold;
  z-index: 100;
  span {
    color: ${(props) => props.theme.color.mainBlue};
    font-weight: 900;
  }
  pre {
    line-height: 26px;
  }
  button {
    width: 100%;
    margin-top: 50px;
  }
`;

export const LoadingWrapper = styled.div`
  ${(props) => props.theme.flex("", "center", "center")}
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 12px 0;
  color: white;
  background-color: ${(props) => props.theme.color.mainBlue};
  border: none;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
`;
