import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEventPostDB } from "../../src/Redux/Async/eventAsync";
import router from "next/router";
import styled from "styled-components";

//components
import RectangleImage from "../../src/Components/Shared/RectangleImage";
import WhiteButton from "../../src/Components/Button/WhiteButton";
import RedButton from "../../src/Components/Button/RedButton";
import CommonInput from "../../src/Components/Input/ValidationInput.jsx";
import HashTagInput from "../../src/Components/Input/HashTagWriteInput";

//이벤트 게시글 작성페이지
const write = () => {
  const dispatch = useDispatch();

  const [postImg, setPostImg] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postRecipe, setPostRecipe] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postTag, setPostTag] = useState();
  const [mainlist, setMainList] = useState(false);
  const [event1list, setEvent1list] = useState(true);
  const [event2list, setEvent2list] = useState(false);
  const [event3list, setEvent3list] = useState(false);

  const addEventPost = () => {
    const content = {
      postImg: postImg,
      postTitle: postTitle,
      postRecipe: postRecipe,
      postContent: postContent,
      postTag: postTag,
      mainlist: mainlist,
      event1list: event1list,
      event2list: event2list,
      event3list: event3list
    };
    if (!postTitle) {
      alert("제목을 입력해주세요");
      return;
    }
    if (!postRecipe) {
      alert("재료를 입력해주세요");
      return;
    }
    if (!postContent) {
      alert("내용을 입력해주세요");
      return;
    }
    if (!postTag) {
      alert("태그를 추가해주세요");
      return;
    }
    dispatch(addEventPostDB(content));
    router.push("/event");
  };

  return (
    <div>
      <WriteBox>
        <CenterBox>
          <RectangleImage edit saveUrl={setPostImg} imgUrl={postImg ? postImg : false} />
        </CenterBox>
        <CenterBox>
          <CommonInput important label={"제목을 입력해주세요"} value={postTitle} setValue={setPostTitle} />
        </CenterBox>
        <CenterBox>
          <CommonInput important label={"꿀조합 재료를 입력해주세요"} value={postRecipe} setValue={setPostRecipe} />
        </CenterBox>
        <CenterBox>
          <CommonInput
            label={"꿀조합 비법을 입력해주세요"}
            value={postContent}
            setValue={setPostContent}
            important
            multiline
            rows={3}
          />
        </CenterBox>
        <CenterBox>
          <HashTagInput important label="해시태그를 추가해주세요" tagList={postTag} setTagList={setPostTag} />
        </CenterBox>
        <CenterBox>
          <FlexBox>
            <WhiteButton
              onClick={() => {
                router.push("/event");
              }}
              value="취소하기"
            />
            <RedButton onClick={addEventPost} value="저장하기" />
          </FlexBox>
        </CenterBox>
      </WriteBox>
    </div>
  );
};
const CenterBox = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const WriteBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;
const FlexBox = styled.div`
  display: flex;
  margin-top: 60px;
`;

export default write;
