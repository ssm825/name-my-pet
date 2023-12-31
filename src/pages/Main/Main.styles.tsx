import styled from "styled-components";

export const Wrapper = styled.div`
  ${(props) => props.theme.flex("", "center", "center")}
  height: 100vh;
  background: rgb(160, 220, 255);
  background: linear-gradient(
    160deg,
    rgba(160, 220, 255, 1) 0%,
    rgba(194, 247, 196, 1) 50%,
    rgba(255, 215, 245, 1) 100%
  );
`;

export const Main = styled.main`
  &&& {
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
  ${(props) => props.theme.flex("column", "", "center")};
  color: ${(props) => props.theme.color.mainBlack};
  outline: none;
  transition: all 0.2s;
  svg {
    color: ${(props) => props.theme.color.mainBlack};
    font-size: xx-large;
  }
`;

export const MainTitle = styled.div`
  margin-bottom: 25px;
  text-align: center;
  .en_title {
    font-size: 44px;
    line-height: 58px;
    font-weight: 800;
    color: ${(props) => props.theme.color.mainBlack};
  }
  .ko_title {
    font-size: large;
    line-height: 40px;
  }
`;

export const Form = styled.form`
  ${(props) => props.theme.flex("column", "", "")};
  padding: 45px 40px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 8px 8px 20px rgba(70, 88, 83, 0.05);
  article {
    margin-bottom: 10px;
  }
`;

export const ContentTitle = styled.h4`
  margin-bottom: 15px;
  color: ${(props) => props.theme.color.mainBlack};
`;

export const SelectLanguageBox = styled.div`
  ${(props) => props.theme.flex("", "space-between", "")};
`;

export const PetDetailInput = styled.input`
  padding: 12px 16px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.mainBlue};
  border-radius: 20px;
  ::placeholder {
    color: ${(props) => props.theme.color.mainGray};
    opacity: 1;
  }
`;

export const Error = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px 0;
  font-size: smaller;
  font-weight: 400;
  color: rgb(231, 14, 14);
`;

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100px;
`;
