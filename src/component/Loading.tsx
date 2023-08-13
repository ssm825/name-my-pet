import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContent>
      <main>
        <FontAwesomeIcon
          icon={faSpinner}
          spinPulse
          size="2xl"
          style={{ color: "#6ebae7" }}
        />
      </main>
    </LoadingContent>
  );
};

const LoadingContent = styled.div`
  ${(props) => props.theme.flex("", "center", "center")}
  width: 100%;
`;

export default Loading;
