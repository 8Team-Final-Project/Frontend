import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

//materia-ui
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

//icon
import { BsSearch } from "react-icons/bs";
import { BiX } from "react-icons/bi";
import { searchApi } from "../src/Shared/api";
import { getTagRankingDB } from "../src/Redux/Async/tagRankingAsync";

//components
import Card from "../src/Components/Card";

export default function Search(props) {
  const [term, setTerm] = useState(""); //검색어가 담기는 곳
  const [tagList, setTagList] = useState([]); //태그목록이 담기는 곳
  const [resultList, setResultList] = useState([]); //태그검색결과가 담기는 곳

  // 태그 순위 받기
  const dispatch = useDispatch();
  const tagRanking = useSelector((state) => state.tagRanking?.tagRanking?.tags);


  //추천태그에 들어갈 항목
  const recommandedTagList = ["테스트", "서브웨이", "편의점", "다이어터", "엽떡", "라면"];

  useEffect(() => {
    // 태그 순위 받는 구독
    dispatch(getTagRankingDB());
    if (tagList.length === 0) return setResultList([]);

    if (tagList.length > 0) {
      searchApi.searchTag(tagList).then((res) => {
        setResultList(res);
      });
    }
  }, [tagList]);

  const deleteTag = (idx) => {
    //x버튼을 누르면 태그목록에서 단일 태그가 사라지게하는 함수
    setTagList(tagList.filter((tag, tagIdx) => tagIdx !== idx));
  };

  const handleOnKeyUp = (e) => {
    //검색어 입력 후, 스페이스바 입력시 검색어가 태그목록에 추가되는 함수
    const { code: keyValue } = e;
    if (keyValue === "Enter") {
      //스페이스바를 누르면 term을 태그목록에 추가하도록 한다.

      //값이 없으면 추가하지 않는다.
      if (!e.target.value) return;

      if (tagList.length == 1) {
        //태그목록은 3개까지만 추가하도록 한다.
        setTerm("");
        return alert("태그를 지우고 다시 검색해주세요!");
      }

      setTagList([...tagList, e.target.value.replace(/ /g, "")]);
      setTerm("");
    }
  };

  const handleOnChange = (e) => {
    //검색어 값을 state 안에 담아주는 함수
    setTerm(e.target.value);
  };

  const clickRecommendedTag = (keyword) => {
    //추천태그를 클릭하면 태그목록에 담는 함수
    if (tagList.length == 1) return alert("태그를 지우고 다시 검색해주세요!");
    setTagList([...tagList, keyword]);
  };

  return (
    <Container>
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
      <RecommendedTagWrapper>
        <Label>추천태그</Label>
        <RecommandedTagBox>
          {tagRanking &&
            tagRanking?.map((tag, idx) => (
              <RecommandedTag key={idx} onClick={() => clickRecommendedTag(tag.tagName)}>
                #{tag.tagName}
              </RecommandedTag>
            ))}
        </RecommandedTagBox>
      </RecommendedTagWrapper>

      <PostWrapper>{resultList[0] && resultList[0].map((post) => <Card key={post._id} {...post} />)}</PostWrapper>
    </Container>
  );
}

const RecommendedTagWrapper = styled.div`
  margin-top: 70px;
`;
const Label = styled.span`
  color: #b8b8b8;
  font-size: 14px;
`;
const RecommandedTagBox = styled.div``;
const RecommandedTag = styled.button`
  border: 1px solid #b8b8b8;
  display: inline-flex;
  justify-content: center;
  min-width: 50px;
  padding: 5px;
  height: 40px;
  border-radius: 100px;
  box-sizing: border-box;
  color: #b8b8b8;
  align-items: center;
  line-height: 1;
  margin-right: 10px;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    color: #ff7775;
    border: 1px solid #ff7775;
  }
`;

const PostWrapper = styled.div`

`;

const Post = styled.div`
  border: 1px solid black;
`;

const Container = styled.div`
  padding : 0px 5%;
`;

const MuiForm = styled(FormControl)`
  width: 100%;
  margin-top: 30px;
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
  padding: 0px 10px;
  height: 40px;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ff7775;
  align-items: center;
  line-height: 1;
  margin-right: 10px;
  margin-top: 10px;
`;
