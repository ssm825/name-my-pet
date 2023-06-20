import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import useForm from "./hooks/useForm";
import styles from "./index.module.css";

export default function Home() {
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState("");

  const petNameInput = useForm({
    pet: "",
  });
  const selectLanguage = useForm("");

  const { inputValue, setInputValue, handleChange } = petNameInput;
  const { text, handleText } = selectLanguage;

  useEffect(() => {
    text === "한글" && setLanguage("korean");
    text === "영어" && setLanguage("english");
  }, [text]);

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
        setResult(data.result);
        setInputValue("");
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
        <img src="/favicon.ico" alt="favicon" />
        <h3>Name my pet</h3>
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
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
