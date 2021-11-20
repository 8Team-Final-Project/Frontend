import React, { useState } from "react";
import styled, { css } from "styled-components";
import { TextField } from "@mui/material";
import { boxSizing } from "@mui/system";

//label : input 제목  ex)label='제목'
//type : input의 type ex)type='password'
//multiline : multiline이 true면, input이 많은 값을 담을 수 있는 textArea로 변경된다. ex) multiline
//rows : multiline일 때만 필요한 props, textArea에서 사용할 높이만큼 적으면 된다. ex) rows={3}

//value : input 원본 value  ex)value={state}
//maxValue : input이 가질 수 있는 최대 글자수 ex)maxValue={10}
//setValue : value가 바뀌면 부모컴포넌트에있는 state에 저장시키기 위한 함수 ex)setValue={setState}

//regexCheck : validation 할 정규표현식 ex)regexCheck={/^[a-z0-9_-]{6,10}$/}

//successText : test 통과했을 때 나타나는 문구 ex)successText = '통과했어요!'
//errorText : test 실패했을 때 나타나는 문구  ex)errorText = '소문자만 적어주세요!'
//defaultText : 기본값 또는 빈값일때 나타나는 문구  ex)defaultText = '제목을 적어주세요!'

//important : important를 선언할 시에, 라벨 옆에 * 표시가 뜹니다.
export default function ValidationInput({
  label,
  type,
  multiline,
  rows,
  value,
  maxValue,
  setValue,
  regexCheck,
  successText,
  errorText,
  defaultText,
  important
}) {
  const [isError, setIsError] = useState(false);
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

    if (e.target.value.length > 0) setHelperText(" ");

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
      <Label important={important && important}>{label}</Label>
      <Input
        error={isError}
        id="standard-error-helper-text"
        helperText={helperText}
        variant="standard"
        type={type}
        onChange={HandleOnChange}
        value={value}
        multiline={multiline ? true : false}
        rows={rows && rows}
      />
    </div>
  );
}

ValidationInput.defaultProps = {
  type: "text",
  label: "",
  value: "",
  setValue: () => {},
  important: false,
  multiline: false,
  rows: 1
};

const Input = styled(TextField)`
  width: 100%;
  font-size: 30px;
`;

const Label = styled.span`
  display: inline-block;
  color: #878787;
  font-size: 22px;
  position: relative;
  margin-bottom: 4%;
  ::before {
    ${({ important }) => important && importantStyle}
  }
`;

const importantStyle = css({
  position: "absolute",
  content: "'*'",
  right: -10,
  top: 0,
  color: "#FF7775",
  fontSize: "20px"
});
