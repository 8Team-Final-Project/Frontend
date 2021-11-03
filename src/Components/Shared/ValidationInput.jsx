import React, { useState } from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

//type : input의 type
//label : input 제목
//value : input 원본 value
//maxValue : input이 가질 수 있는 최대 글자수
//setValue : value가 바뀌면 부모컴포넌트에있는 state에 저장시키기 위한 함수

//regexCheck 또는 check함수 둘 중에 하나만 있으면 됩니다.
//regexCheck : validation 할 정규표현식

//successText : test 통과했을 때 나타나는 문구
//errorText : test 실패했을 때 나타나는 문구
//defaultText : 기본값 또는 빈값일때 나타나는 문구
export default function ValidationInput({
  label,
  type,
  value,
  maxValue,
  setValue,
  regexCheck,
  successText,
  errorText,
  defaultText
}) {
  const [isError, setIsError] = useState(true);
  const [helperText, setHelperText] = useState(defaultText);

  const HandleOnChange = (e) => {
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
        return setHelperText(successText);
      }
      if (!regexCheck.test(e.target.value)) {
        setIsError(true);
        setHelperText(errorText);
      }
    }
  };

  return (
    <div>
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
    </div>
  );
}

ValidationInput.defaultProps = {
  type: "text",
  label: "",
  value: "",
  setValue: () => {}
};

const Input = styled(TextField)`
  width: 100%;
`;

const Label = styled.span`
  color: #878787;
  font-size: 18px;
`;
