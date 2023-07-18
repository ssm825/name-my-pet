import { useState } from "react";

const useForm = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [text, setText] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setError("");
  };

  const handleText = (e) => {
    setText(e.target.textContent);
    setError("");
  };

  const validate = (validateFunc, errorMessage) => {
    const regExp = /^[^0-9!@#$%^&*()-=_+{}\[\]|\\~;:'",.<>\/?]+$/;
    const inputStr = Object.values(inputValue)[0];
    if (inputStr && !regExp.test(inputStr)) {
      setError("* 숫자와 기호를 제외한 단어를 입력해 주세요.");
      return false;
    }

    if (!validateFunc(inputValue || text)) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  return {
    inputValue,
    setInputValue,
    text,
    setText,
    handleText,
    error,
    handleChange,
    validate,
  };
};

export default useForm;
