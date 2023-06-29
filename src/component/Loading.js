import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <div>
      <main>
        <FontAwesomeIcon
          icon={faSpinner}
          spinPulse
          size="2xl"
          style={{ color: "#6ebae7" }}
        />
      </main>
    </div>
  );
};

export default Loading;
