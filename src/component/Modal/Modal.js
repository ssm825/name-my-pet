import React, { memo, useMemo } from "react";
import Loading from "../Loading";
import * as Style from "./Modal.styles";

const Modal = memo(
  ({ loading, result, handleModal, inputResult, languageText }) => {
    const shouldRender = useMemo(
      () => !!inputResult && !!languageText,
      [inputResult, languageText]
    );

    return (
      shouldRender && (
        <Style.Modal>
          <Style.Result>
            {loading && Style.LoadingWrapper && (
              <Style.LoadingWrapper>
                <Loading />
              </Style.LoadingWrapper>
            )}
            {result && (
              <>
                <div>
                  <span>{inputResult}</span>와(과) 어울리는 {languageText}{" "}
                  이름은!
                </div>
                <pre>{result}</pre>
                {loading ? (
                  <Loading />
                ) : (
                  <Style.Button onClick={handleModal}>다시 찾기</Style.Button>
                )}
              </>
            )}
          </Style.Result>
        </Style.Modal>
      )
    );
  }
);

export default Modal;
