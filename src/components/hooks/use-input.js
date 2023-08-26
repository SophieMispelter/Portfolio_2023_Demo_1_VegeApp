import { useReducer } from "react";

const initialInputState = {
  value: "",
  isBlur: false,
};

const inputStateReducer = (state, action) => {
  //   console.log("state: ", state);
  //   console.log("action: ", action);

  if (action.type === "INPUT") {
    return {
      value: action.value,
      isBlur: state.isBlur,
    };
  }

  if (action.type === "BLUR") {
    return {
      isBlur: true,
      value: state.value,
    };
  }

  if (action.type === "RESET") {
    return {
      isBlur: false,
      value: "",
    };
  }

  return initialInputState;
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  // console.log("inputState: ", inputState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isBlur;

  const inputChangeHandler = (e) => {
    // console.log(e.target.value);
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetAfterFormSubmission = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    isValid: valueIsValid,
    onChange: inputChangeHandler,
    onBlur: inputBlurHandler,
    resetAfterFormSubmission,
  };
};

export default useInput;
