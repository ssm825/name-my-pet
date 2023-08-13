import { useCallback, useEffect, useState, FormEvent } from "react";
import useForm from "../../hooks/useForm";
import Loading from "../../component/Loading/Loading";
import Button from "../../component/Button/Button";
import { montserrat, notoSansKr } from "../../styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import * as Style from "./Main.styles";

import dynamic from "next/dynamic";
const DynamicModal = dynamic(() => import("../../component/Modal/Modal"), {
  loading: () => (
    <Style.LoadingWrapper>
      <Loading />
    </Style.LoadingWrapper>
  ),
});

export default function Main() {
  const [language, setLanguage] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const petNameInput = useForm({ pet: "" });
  const selectLanguage = useForm({ language: "" });

  useEffect(() => {
    selectLanguage.inputValue.language === "한글" && setLanguage("korean");
    selectLanguage.inputValue.language === "영어" && setLanguage("english");
  }, [selectLanguage.inputValue.language]);

  const handleModal = () => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    petNameInput.setInputValue({ pet: "" });
    selectLanguage.setInputValue({ language: "" });
    setResult("");
    return () => {
      clearTimeout(timer);
    };
  };

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const isLanguageValid = selectLanguage.validate(
        (inputValue) => inputValue.language !== "",
        "* 필수 선택항목입니다."
      );
      const isPetNameValid = petNameInput.validate(
        (inputValue) => inputValue.pet !== "",
        "* 필수 입력항목입니다."
      );

      if (isPetNameValid && isLanguageValid) {
        setLoading(true);
        try {
          const response = await fetch("/api/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              pet: petNameInput.inputValue.pet,
              language: selectLanguage.inputValue.language,
            }),
          });

          const data = await response.json();
          if (!response.ok) {
            throw new Error(
              data.error || `Request failed with status ${response.status}`
            );
          }
          setLoading(false);
          setResult(data.result);
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error(error);
            alert(`Error: ${error.message}`);
          } else {
            alert(`알 수 없는 에러 : ${error}`);
          }
        }
      }
    },
    [
      petNameInput.inputValue.pet,
      selectLanguage.inputValue.language,
      selectLanguage,
      petNameInput,
    ]
  );

  return (
    <Style.Wrapper className={notoSansKr.className}>
      <Style.Main>
        <FontAwesomeIcon icon={faPaw} />
        <Style.MainTitle>
          <h3 className={`en_title ${montserrat.className}`}>Name my pet</h3>
          <p className="ko_title">반려동물 이름 랜덤 생성</p>
        </Style.MainTitle>
        <Style.Form onSubmit={onSubmit}>
          <article>
            <Style.ContentTitle>
              한글 또는 영어를 선택해 주세요.
            </Style.ContentTitle>
            <Style.SelectLanguageBox>
              <Button
                type="button"
                name="language"
                data-value="한글"
                className={
                  selectLanguage.inputValue.language === "한글" ? "select" : ""
                }
                onClick={selectLanguage.handleChange}
                color="mainGray"
                $hoverColor="mainBlue"
                width="48%"
              >
                한글
              </Button>
              <Button
                type="button"
                name="language"
                data-value="영어"
                className={
                  selectLanguage.inputValue.language === "영어" ? "select" : ""
                }
                onClick={selectLanguage.handleChange}
                color="mainGray"
                $hoverColor="mainBlue"
                width="48%"
              >
                영어
              </Button>
            </Style.SelectLanguageBox>
            <Style.Error>
              {selectLanguage.error && <p>{selectLanguage.error}</p>}
            </Style.Error>
          </article>
          <article>
            <Style.ContentTitle>
              당신의 반려동물에 대해 자세히 적어주세요.
            </Style.ContentTitle>
            <Style.PetDetailInput
              type="text"
              name="pet"
              value={petNameInput.inputValue.pet || ""}
              onChange={petNameInput.handleChange}
              placeholder="예시) 꼬리가 통통한 검은 고양이"
            />
            <Style.Error>
              {petNameInput.error && <p>{petNameInput.error}</p>}
            </Style.Error>
          </article>
          <Button type="submit">이름 만들기</Button>
        </Style.Form>
        {(loading || result) && (
          <DynamicModal
            loading={loading}
            result={result}
            handleModal={handleModal}
            inputResult={petNameInput.inputValue.pet}
            languageText={selectLanguage.inputValue.language}
          />
        )}
      </Style.Main>
    </Style.Wrapper>
  );
}
