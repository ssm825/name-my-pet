import React, { FC } from "react";
import Button from "@/components/Button/Button";
import Loading from "@/components/Loading/Loading";
import * as Style from "./Modal.styles";

interface ModalProps {
  loading?: boolean;
  result?: string;
  handleModal(): void;
  inputResult?: string;
  languageText?: string;
}

const Modal: FC<ModalProps> = ({
  loading,
  result,
  handleModal,
  inputResult,
  languageText,
}) => {
  return (
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
              <span>{inputResult}</span>와(과) 어울리는 {languageText} 이름은!
            </div>
            <pre>{result}</pre>
            {loading ? (
              <Loading />
            ) : (
              <Button onClick={handleModal}>다시 찾기</Button>
            )}
          </>
        )}
      </Style.Result>
    </Style.Modal>
  );
};

export default Modal;
