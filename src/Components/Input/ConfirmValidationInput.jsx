//Confirmvalidationinput
import React, { useState } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

//handleValueCheck는 중복확인을 할 수 있는 api함수를 담아주면 됩니다.
//isCheck는 부모로부터 중복확인 여부 state 값을 받아온다.
//setIsCheck는 부모로부터 중복확인 여부 state를 변경시킬 수 있는 함수를 받아온다.

export default function ConfirmValidationInput({
  label,
  type,
  value,
  maxValue,
  setValue,
  regexCheck,
  successText,
  errorText,
  defaultText,
  handleValueCheck,
  isCheck,
  setIsCheck
}) {
  const [isError, setIsError] = useState(false);
  const [isCheckOn, setIsCheckOn] = useState(false); //중복체크를 on 할 것인지 안할것인지 판별 여부
  const [helperText, setHelperText] = useState(defaultText);

  const HandleOnChange = (e) => {
    //한번이라도 수정한 적이 있으면 isWrite를 true로, isCheck를 false 변경시킨다.
    if (isCheck) setIsCheck(false);

    //최대값이 지정되어있으면 value를 저장하지 않는다.
    if (maxValue && maxValue < e.target.value.length) return;

    setValue(e.target.value);

    //공백인 경우 defaultText로 바꾼다.
    if (e.target.value === "") {
      setIsError(true);
      return setHelperText(defaultText);
    }

    if (regexCheck) {
      // 정규표현식체크가 통과되면 successText를 송출하고 아니면 errorText를 송출한다
      if (regexCheck.test(e.target.value)) {
        setIsError(false);
        setIsCheckOn(true);
        return setHelperText(successText);
      }
      if (!regexCheck.test(e.target.value)) {
        setIsError(true);
        setHelperText(errorText);
        setIsCheckOn(false);
      }
    }
  };

  const handleCheck = () => {
    handleValueCheck();
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        error={isError}
        id="standard-error-helper-text"
        helperText={helperText}
        variant="standard"
        type={type}
        onChange={HandleOnChange}
        value={value}
      />
      {isCheck ? (
        <CheckSuccessBnt>확인</CheckSuccessBnt>
      ) : (
        <CheckBnt isCheckOn={isCheckOn} disabled={!isCheckOn ? true : false} onClick={handleCheck}>
          중복확인
        </CheckBnt>
      )}
    </Container>
  );
}

ConfirmValidationInput.defaultProps = {
  type: "text",
  label: "",
  value: "",
  setValue: () => {},
  isCheck: false,
  setIsCheck: () => {},
  handleValueCheck: () => {},
  successText: " "
};

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Label = styled.span`
  color: #878787;
  font-size: 18px;
  margin-bottom: 4%;
`;

const Input = styled(TextField)`
  width: 100%;
  input {
    width: calc(100% - 110px);
  }
`;

const CheckBnt = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  width: 80px;
  height: 40px;
  border: ${({ isCheckOn }) => (isCheckOn ? "1px solid #ff7775;" : "1px solid #d9d9d9")};
  color: ${({ isCheckOn }) => (isCheckOn ? "#FF7775" : "#3C3C3C")};
  font-size: 15px;
  border-radius: 100px;
  text-align: center;
  font-weight: 500;
  padding: 0px 7px;
`;

const CheckSuccessBnt = styled.button`
  display: flex;
  align-items: center;
  width: 100px;
  height: 40px;
  position: absolute;
  right: 0;
  top: 10px;
  border: 1px solid #6b95ff;
  font-size: 16px;
  border-radius: 100px;
  justify-content: center;
  color: #6b95ff;
  font-weight: bold;
`;
