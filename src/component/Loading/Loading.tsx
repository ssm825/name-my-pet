import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Loading.styles";

const Loading = () => {
  return (
    <Style.LoadingContent>
      <main>
        <FontAwesomeIcon
          icon={faSpinner}
          spinPulse
          size="2xl"
          style={{ color: "#6ebae7" }}
        />
      </main>
    </Style.LoadingContent>
  );
};

export default Loading;
