import React, { useState } from "react";
import styled from "@emotion/styled";

//materia-ui
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//icon
import { BsSearch } from "react-icons/bs";
import { BiX } from "react-icons/bi";

export default function Search() {
  const [term, setTerm] = useState("");
  const [tagList, setTagList] = useState([]);

  const deleteTag = (idx) => {
    setTagList(tagList.filter((tag, tagIdx) => tagIdx !== idx));
  };

  const handleOnKeyUp = (e) => {
    const { code: keyValue } = e;
    if (keyValue === "Space") {
      //스페이스바를 누르면 term을 태그목록에 추가하도록 한다.

      if (tagList.length >= 3) {
        //태그목록은 3개까지만 추가하도록 한다.
        setTerm("");
        return alert("태그는 3개까지만 설정할 수 있어요");
      }

      if (/^\s/g.test(term) === true) {
        //tap이나 스페이스만 있을 때는 tagList에 저장하지 않는다.
        alert("값을 입력해주세요!");
        return setTerm("");
      }

      setTagList([...tagList, e.target.value.trim()]);
      setTerm("");
    }
  };

  const handleOnChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div>
      <MuiForm variant="standard">
        <MuiInput
          id="input-with-icon-adornment"
          onKeyUp={handleOnKeyUp}
          onChange={handleOnChange}
          value={term}
          startAdornment={
            <InputAdornment position="start">
              <BsSearch />
            </InputAdornment>
          }
        />
        <HelperText>태그는 스페이스로 구분해주세요</HelperText>
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
    </div>
  );
}

const MuiForm = styled(FormControl)`
  width: 100%;
`;

const MuiInput = styled(Input)`
  color: #ff7775;
`;

const HelperText = styled.span`
  color: #b8b8b8;
  font-size: 14px;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  border: 1px solid #ff7775;
  display: inline-flex;
  min-width: 50px;
  padding: 5px;
  height: 40px;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ff7775;
  align-items: center;
  line-height: 1;
  margin-right: 10px;
  margin-top: 10px;
`;
