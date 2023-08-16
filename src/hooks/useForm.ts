import {
  useState,
  useCallback,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";

interface InputData {
  [key: string]: string;
}

interface FormType {
  inputValue: InputData;
  setInputValue: Dispatch<SetStateAction<InputData>>;
  error: string;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>
  ) => void;
  validate: (
    validateFunc: (value: InputData) => boolean,
    errorMessage: string
  ) => boolean;
}

const useForm = (initialValue: InputData): FormType => {
  const [inputValue, setInputValue] = useState<InputData>(initialValue);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
      const target = e.target as HTMLInputElement | HTMLButtonElement;
      const name = target.name;
      const value =
        target.type === "text"
          ? (target as HTMLInputElement).value
          : (target as HTMLButtonElement).dataset.value;
      if (name && (value || value === "")) {
        setInputValue((prev) => ({ ...prev, [name]: value }));
        setError("");
      }
    },
    []
  );

  const validate = (
    validateFunc: (value: InputData) => boolean,
    errorMessage: string
  ): boolean => {
    const regExp = /^[^0-9!@#$%^&*()-=_+{}\[\]|\\~;:'",.<>\/?]+$/;
    const inputStr = Object.values(inputValue)[0] || "";
    if (inputStr && !regExp.test(inputStr)) {
      setError("* 숫자와 기호를 제외한 단어를 입력해 주세요.");
      return false;
    }

    if (!validateFunc(inputValue)) {
      setError(errorMessage);
      return false;
    }
    return true;
  };

  return {
    inputValue,
    setInputValue,
    error,
    handleChange,
    validate,
  };
};

export default useForm;
