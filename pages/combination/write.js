import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCombinationPostDB } from "../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";
import HashTagWriteInput from "../../src/Components/Input/HashTagWriteInput";
import RectangleImage from "../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../src/Components/Input/ValidationInput";
import RedButton from "../../src/Components/Button/RedButton";
import WhiteButton from "../../src/Components/Button/WhiteButton";

//꿀조합 작성페이지
const write = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [postTitle, setTitle] = useState("");
  const [postContent, setContent] = useState("");
  const [postImg, setImg] = useState("");
  const [postTag, setTag] = useState("");
  const [postRecipe, setRecipe] = useState("");

  const setPost = () => {
    const postItem = {
      postTitle: postTitle,
      postContent: postContent,
      postImg: postImg,
      postTag: postTag,
      postRecipe: postRecipe,
      mainlist: true,
      event1list: false,
      event2list: false,
      event3list: false
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
    dispatch(addCombinationPostDB(postItem));
    router.push("/combination");
  };

  return (
    <div>
      <WriteBox>
        <CenterBox>
          <RectangleImage edit imgUrl={postImg ? postImg : false} saveUrl={setImg}></RectangleImage>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="제목을 입력해주세요"
            value={postTitle}
            setValue={setTitle}
            maxValue={15}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="꿀조합 재료를 입력해주세요"
            value={postRecipe}
            setValue={setRecipe}
            maxValue={15}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="꿀조합 비법을 입력해주세요"
            value={postContent}
            setValue={setContent}
            maxValue={99}
            defaultText
            important
            multiline
            rows={3}
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <HashTagWriteInput tagList={[...postTag]} setTagList={setTag} label="해시태그를 추가해주세요" important />
        </CenterBox>
        <CenterBox>
          <FlexBox>
            <WhiteButton
              value="취소하기"
              onClick={() => {
                {
                  router.push("/combination");
                }
              }}
            />
            <RedButton
              value="작성하기"
              onClick={() => {
                setPost();
              }}
            />
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
