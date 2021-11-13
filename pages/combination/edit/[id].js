import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
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
  const postId = useRouter().query.id;

  const [postImg, setPostImg] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postRecipe, setPostRecipe] = useState("");
  const [postContent, setPostContent] = useState("");

  const getPostImg = useSelector((state) => state.combination.post?.postImg);
  const getPostTitle = useSelector((state) => state.combination.post?.postTitle);
  const getPostRecipe = useSelector((state) => state.combination.post?.postRecipe);
  const getPostContent = useSelector((state) => state.combination.post?.postContent);

  React.useEffect(() => {
    if (getPostImg && getPostImg !== postImg) setPostImg(getPostImg);
    if (getPostTitle && getPostTitle !== postTitle) setPostTitle(getPostTitle);
    if (getPostRecipe && getPostRecipe !== postRecipe) setPostRecipe(getPostRecipe);
    if (getPostContent && getPostContent !== postContent) setPostContent(getPostContent);
  }, [getPostImg, getPostTitle, getPostRecipe, getPostContent]);



  const editPost = () => {
    const postItem = {
      postImg: postImg,
      postTitle: postTitle,
      postRecipe: postRecipe,
      postContent: postContent,
      postId: postId,
    };
    disPatch(patchCombinationPostDB(postItem));
    router.push(`/combination/detail/${postId}`)
  };

  return (
    <Wrap>
      <WriteBox>
        <CenterBox>
          <RectangleImage
            edit
            imgUrl={postImg? postImg : false}
            saveUrl={setPostImg}
            ></RectangleImage>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="제목을 입력해주세요"
            value={postTitle}
            setValue={setPostTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            maxValue={10}
            defaultText
            important
            ></ValidationInput>
        </CenterBox>
        <CenterBox>
         <ValidationInput
            label="재료를 입력해주세요"
            value={postRecipe}
            setValue={setPostRecipe}
            onChange={(e) => setPostRecipe(e.target.value)}
            maxValue={15}
            defaultText
            important
          ></ValidationInput>
        </CenterBox>
        <CenterBox>
          <ValidationInput
            label="내용을 입력해주세요"
            value={postContent}
            setValue={setPostContent}
            onChange={(e) => setPostContent(e.target.value)}
            maxValue={99}
            defaultText
            important
            multiline
            rows={5}
          ></ValidationInput>
        </CenterBox>

        <CenterBox>
         <FlexBox>
            <WhiteButton 
                value="취소"
                onClick={() => {
                {router.push(`/combination/detail/${postId}`)}}}
              /><RedButton 
                value="저장"
                onClick={()=>{
                editPost()
                {router.push(`/combination/detail/${postId}`)}}}
              /></FlexBox>
        </CenterBox>
      </WriteBox>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin :auto 
`

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
