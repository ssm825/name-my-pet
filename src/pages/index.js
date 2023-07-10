import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import Loading from "../component/Loading";
import ResponsiveContainer from "../component/ResponsiveContainer";
import { montserrat, notoSansKr } from "../styles/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import * as Style from "./index.styles";

export default function Home() {
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(null);

  const petNameInput = useForm({
    pet: "",
  });
  const selectLanguage = useForm("");

  const { inputValue, setInputValue, handleChange } = petNameInput;
  const { text, setText, handleText } = selectLanguage;

  useEffect(() => {
    text === "한글" && setLanguage("korean");
    text === "영어" && setLanguage("english");
  }, [text]);

  const handleModal = () => {
    setLoading(true);
    let timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    setInputValue("");
    setText("");
    setResult("");
    return () => {
      clearTimeout(timer);
    };
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isLanguageValid = selectLanguage.validate(
      (language) => language !== "",
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
          body: JSON.stringify({ pet: inputValue.pet, language }),
        });

        const data = await response.json();
        if (response.status !== 200) {
          throw (
            data.error ||
            new Error(`Request failed with status ${response.staus}`)
          );
        }
        setLoading(false);
        setResult(data.result);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  return (
    <ResponsiveContainer>
      <Style.Wrapper className={notoSansKr.className}>
        <Head>
          <title>Name My Pet</title>
          <meta name="description" content="OpenAI + ChatGPT App" />
        </Head>
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
                <Style.SelectLaguageButton
                  type="button"
                  className={text === "한글" ? "select" : ""}
                  onClick={handleText}
                >
                  한글
                </Style.SelectLaguageButton>
                <Style.SelectLaguageButton
                  type="button"
                  className={text === "영어" ? "select" : ""}
                  onClick={handleText}
                >
                  영어
                </Style.SelectLaguageButton>
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
                value={inputValue.pet || ""}
                onChange={handleChange}
                placeholder="예시) 꼬리가 통통한 검은 고양이"
              />
              <Style.Error>
                {petNameInput.error && <p>{petNameInput.error}</p>}
              </Style.Error>
            </article>
            <Style.Button type="submit">이름 만들기</Style.Button>
          </Style.Form>
          {(loading || result) && (
            <Style.Modal>
              <Style.Result>
                {loading && <Loading />}
                {result && (
                  <>
                    <div>
                      <span>{inputValue.pet}</span>와(과) 어울리는 {text}{" "}
                      이름은!
                    </div>
                    <pre>{result}</pre>
                    {loading ? (
                      <Loading />
                    ) : (
                      <Style.Button onClick={handleModal}>
                        다시 찾기
                      </Style.Button>
                    )}
                  </>
                )}
              </Style.Result>
            </Style.Modal>
          )}
        </Style.Main>
      </Style.Wrapper>
    </ResponsiveContainer>
  );
}
