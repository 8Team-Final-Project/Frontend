import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { patchCombinationPostDB } from "../../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";
import RectangleImage from "../../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../../src/Components/Input/ValidationInput";
import RedButton from "../../../src/Components/Button/RedButton";
import WhiteButton from "../../../src/Components/Button/WhiteButton";

//꿀조합 수정페이지
const combinationEdit = () => {

  const disPatch = useDispatch();
  const router = useRouter();

  const [postTitle, setTitle] = React.useState("");
  const [postContent, setContent] = React.useState("");
  const [postImg, setImg] = React.useState("");
  const [postTag, setTag] = React.useState("");

  const postId = useRouter().query.id;

  const editPost = () => {
    const postItem = {
      postTitle: postTitle,
      postContent: postContent,
      postImg: postImg,
      postTag: postTag,
      postId: postId,
      mainlist: true,
      event1list: false,
      event2list: false,
      event3list: false,

    };
    disPatch(patchCombinationPostDB(postItem));
  };

  return (
    <div>
      <WriteBox>
        <CenterBox>
          <RectangleImage
            edit
            imgUrl={postImg? postImg : false}
            saveUrl={setImg}
            ></RectangleImage>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="제목을 입력해주세요"
            value={postTitle}
            setValue={setTitle}
            maxValue={10}
            defaultText
            important
            ></ValidationInput>
        </CenterBox>
        <CenterBox>
         <ValidationInput
            label="재료를 입력해주세요"
            value={postRecipe}
            setValue={setRecipe}
            maxValue={15}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="내용을 입력해주세요"
            value={postContent}
            setValue={setContent}
            maxValue={99}
            defaultText
            important
            multiline
            rows={5}
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <HashTagWriteInput
            tagList= {[...postTag]}
            setTagList={setTag}
            label="해시태그를 입력해주세요"
            important
          /></CenterBox>
        <CenterBox>
         <FlexBox>
            <WhiteButton 
                value="취소"
                onClick={() => {
                {router.push(`/combination/detail/${postId}`)}}}
              /><RedButton 
                value="저장"
                onClick={()=>{
                setPost()
                {router.push(`/combination/detail/${postId}`)}}}
              /></FlexBox>
        </CenterBox>
      </WriteBox>
    </div>
  );
};

const CenterBox = styled.div`
  width: 90%;
  margin: 10px auto;
`;

const WriteBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;
const FlexBox = styled.div`
  display: flex;
`;

export default combinationEdit;
