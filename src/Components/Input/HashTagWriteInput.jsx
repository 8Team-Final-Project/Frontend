//이 컴포넌트는 글작성 수정시에 사용할 수 있는 해쉬태그 작성용 인풋입니다.

import React, { useState } from "react";
import styled, { css } from "styled-components";
import Swal from "sweetalert2";

//materia-ui
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";

//icons
import { BiX } from "react-icons/bi";

//tagList : 부모컴포넌트의 tagList ex)tagList={state}
//setTagList : 부모컴포넌트의 tagList를 변경시켜주는 함수 ex)setTagList={setState}
//label : 제목  ex)label='제목'
//important : true면 *가 표시된다.  ex)important
export default function HashTagInput({ tagList, setTagList, important, label, placeholder }) {
  const [term, setTerm] = useState("");
  const [isError, setIsError] = useState(false);
  const maxValue = 10; //최대글자수는 10자로 하겠습니다 :-)

  const deleteTag = (idx) => {
    setTagList(tagList.filter((tag, tagIdx) => tagIdx !== idx));
  };

  const handleOnKeyUp = (e) => {
    const { key: keyName } = e;
    if (keyName === "Enter") {
      //스페이스바를 누르면 term을 태그목록에 추가하도록 한다.

      //값이 없으면 추가하지 않는다.
      if (!e.target.value || e.target.value.indexOf(" ") == 0) return;

      if (tagList.length >= 3) {
        //태그목록은 3개까지만 추가하도록 한다.
        setTerm("");
        return Swal.fire("태그는 3개까지만 설정할 수 있어요", "", "error");
      }

      setTagList([...tagList, e.target.value.replace(/ /g, "")]);
      setTerm("");
    }
  };

  const handleOnChange = (e) => {
    const value = e.target.value;

    //최대글자수보다 넘을경우 값을 저장하지 않는다.
    if (value.length > maxValue) return;

    setTerm(value);
  };

  return (
    <Container>
      <Header>
        <Label important={important && important}>{label}</Label>
        <HelperText>최대 3개까지 가능합니다.</HelperText>
      </Header>
      <MuiForm variant="standard">
        <MuiInput
          id="standard-error-helper-text"
          error={isError}
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          value={term}
          placeholder={placeholder}
        />
      </MuiForm>
      <TagWrapper>
        {tagList.map((ele, idx) => (
          <Tag key={idx}>
            #{ele}
            <BiX
              onClick={() => {
                deleteTag(idx);
              }}
            />
          </Tag>
        ))}
      </TagWrapper>
    </Container>
  );
}

HashTagInput.defaultProps = {
  important: false,
  tagList: [],
  setTagList: () => {}
};

const Container = styled.div`
  width: 100%;
`;

const Header = styled.div`
  ::after {
    clear: both;
  }
`;

const Label = styled.span`
  float: left;
  color: #878787;
  font-size: 18px;
  position: relative;
  ::before {
    ${({ important }) => important && importantStyle}
  }
`;

const HelperText = styled.span`
  float: right;
  color: #b8b8b8;
  font-size: 14px;
  margin-top: 4px;
`;

const MuiForm = styled(FormControl)`
  width: 100%;
`;

const MuiInput = styled(Input)`
  color: #ff7775;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  min-width: 50px;
  height: 40px;
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 10px;
  padding: 5px;
  border: 1px solid #ff7775;
  border-radius: 100px;
  line-height: 1;
  color: #ff7775;
`;

const importantStyle = css({
  position: "absolute",
  content: "'*'",
  right: -10,
  top: 0,
  color: "#FF7775",
  fontSize: "18px"
});
