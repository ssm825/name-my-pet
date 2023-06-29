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
