import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import router from "next/router";

//library
import Swal from "sweetalert2";

//function
import { addPostDB } from "../../src/Redux/Async/postAsync";

//components
import RectangleImage from "../../src/Components/Shared/RectangleImage";
import WhiteButton from "../../src/Components/Button/WhiteButton";
import RedButton from "../../src/Components/Button/RedButton";
import CommonInput from "../../src/Components/Input/ValidationInput.jsx";
import HashTagInput from "../../src/Components/Input/HashTagWriteInput";

//이벤트 게시글 작성페이지
const write = () => {
  const dispatch = useDispatch();

  const [postImg1, setPostImg] = useState(""); // 게시물 이미지
  const [postTitle, setPostTitle] = useState(""); // 게시물 제목
  const [postRecipe, setPostRecipe] = useState(""); // 게시물 레시피
  const [postContent, setPostContent] = useState(""); // 게시물 본문
  const [postTag, setPostTag] = useState(); // 게시물 태그
  const [mainlist, setMainList] = useState(false); // 꿀조합게시글
  const [event1list, setEvent1list] = useState(true); // 이벤트1 게시글
  const [event2list, setEvent2list] = useState(false); // 이벤트2 게시글
  const [event3list, setEvent3list] = useState(false); // 이벤트3 게시글

  // 게시물 추가 
  const addEventPost = () => {
    const content = {
      postImg1: postImg1,
      postTitle: postTitle,
      postRecipe: postRecipe,
      postContent: postContent,
      postTag: postTag,
      mainlist: mainlist,
      event1list: event1list,
      event2list: event2list,
      event3list: event3list
    };
    //모든 빈칸을 채워야 게시물 추가가 가능 
    if (!postTitle) {
      return Swal.fire("제목을 입력해주세요", "", "error");
    }
    if (!postRecipe) {
      return Swal.fire("재료를 입력해주세요", "", "error");
    }
    if (!postContent) {
      return Swal.fire("내용을 입력해주세요", "", "error");
    }
    if (!postTag) {
      return Swal.fire("태그를 완성해주세요", "", "error");
    }
    dispatch(addPostDB(content));
    router.push("/event");
  };

  return (
    <WriteBox>
      <CenterBox>
        <RectangleImage edit saveUrl={setPostImg} imgUrl={postImg1 ? postImg1 : false} />
      </CenterBox>
      <CenterBox>
        <CommonInput
          defaultText="제목을 입력해주세요"
          important
          label={"나의 꿀조합"}
          value={postTitle}
          setValue={setPostTitle}
        />
      </CenterBox>
      <CenterBox>
        <CommonInput
          defaultText="꿀조합 재료를 입력해주세요"
          important
          label={"꿀조합 재료"}
          value={postRecipe}
          setValue={setPostRecipe}
        />
      </CenterBox>
      <CenterBox>
        <CommonInput
          label={"꿀조합 비법"}
          value={postContent}
          setValue={setPostContent}
          defaultText="꿀조합 비법을 설명해주세요"
          important
          multiline
          rows={3}
        />
      </CenterBox>
      <CenterBox>
        <HashTagInput
          important
          label="해시태그"
          tagList={postTag}
          placeholder="엔터를 눌러 태그를 완성해주세요"
          setTagList={setPostTag}
        />
      </CenterBox>
      <CenterBox>
        <FlexBox>
          <WhiteButton
            onClick={() => {
              router.push("/event");
            }}
            value="취소"
          />
          <RedButton onClick={addEventPost} value="저장" />
        </FlexBox>
      </CenterBox>
    </WriteBox>
  );
};

//styled-component
const CenterBox = styled.div`
  width: 100%;
  margin: 20px auto;
`;

const WriteBox = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
`;

const FlexBox = styled.div`
  display: flex;
  margin-top: 60px;
`;

export default write;
