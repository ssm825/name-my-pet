import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import Loading from "./Component/Loading";
import useForm from "./hooks/useForm";
import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

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
    <div className={styles.wrapper}>
      <Head>
        <title>Name My Pet</title>
        <meta name="description" content="OpenAI + ChatGPT App" />
      </Head>
      <main className={styles.main}>
        <FontAwesomeIcon icon={faPaw} />
        <div className={styles.main_title}>
          <h3>Name my pet</h3>
          <p className={styles.ko_title}>반려동물 이름 랜덤 생성</p>
        </div>
        <form onSubmit={onSubmit}>
          <article>
            <h4 className={styles.title}>한글 또는 영어를 선택해 주세요.</h4>
            <div className={styles.button_box}>
              <button
                type="button"
                className={text === "한글" ? styles.select : ""}
                onClick={handleText}
              >
                한글
              </button>
              <button
                type="button"
                className={text === "영어" ? styles.select : ""}
                onClick={handleText}
              >
                영어
              </button>
            </div>
            <div className={styles.error}>
              {selectLanguage.error && <p>{selectLanguage.error}</p>}
            </div>
          </article>
          <article>
            <h4 className={styles.title}>
              당신의 반려동물에 대해 자세히 적어주세요.
            </h4>
            <input
              type="text"
              name="pet"
              value={inputValue.pet || ""}
              onChange={handleChange}
              placeholder="예시) 꼬리가 통통한 검은 고양이"
            />
            <div className={styles.error}>
              {petNameInput.error && <p>{petNameInput.error}</p>}
            </div>
          </article>
          <button type="submit">이름 만들기</button>
        </form>
        {(loading || result) && (
          <div className={styles.result_wrapper}>
            <div className={styles.result}>
              {loading && <Loading />}
              {result && (
                <>
                  <div>
                    <span>{inputValue.pet}</span>와(과) 어울리는 {text} 이름은!
                  </div>
                  <pre>{result}</pre>
                  {loading ? (
                    <Loading />
                  ) : (
                    <button onClick={handleModal}>다시 찾기</button>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
