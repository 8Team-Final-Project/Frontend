import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { editEventPostDB, getEventPostDB } from "../../../src/Redux/Async/eventAsync";

//Component
import RectangleImage from "../../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../../src/Components/Input/ValidationInput";
import RedButton from "../../../src/Components/Button/RedButton";
import WhiteButton from "../../../src/Components/Button/WhiteButton";
import { getStepLabelUtilityClass } from "@mui/material";

//주의사항
//수정페이지에서 새로고침하면 post가 날아간다. => useEffect에 미들웨어를 넣어서 새로고침해도 state 유지..?? getPost
//인풋창에 어떻게 원본값을 넣어줄것인가 => useEffect를 통해서 post정보가 리덕스스토어에 있으면, setState. state값을 input value에 넣어준다.
//인풋에 원본값이 있는 상태에서 어떻게 수정이 가능하게 할 것 인가? => input값을 담아줄 state를 만들어준다.

//이벤트게시물 수정페이지
const EventPostEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const postId = useRouter().query.id;
  const post = useSelector((state) => state.event.post);

  const [postImg, setPostImg] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postRecipe, setPostRecipe] = useState("");
  const [postContent, setPostContent] = useState("");

  const getPostImg = useSelector((state) => state.event.post?.postImg);
  const getPostTitle = useSelector((state) => state.event.post?.postTitle);
  const getPostRecipe = useSelector((state) => state.event.post?.postRecipe);
  const getPostContent = useSelector((state) => state.event.post?.postContent);

  React.useEffect(() => {
    if (getPostImg && getPostImg !== postImg) setPostImg(getPostImg);
    if (getPostTitle && getPostTitle !== postTitle) setPostTitle(getPostTitle);
    if (getPostRecipe && getPostRecipe !== postRecipe) setPostRecipe(getPostRecipe);
    if (getPostContent && getPostContent !== postContent) setPostContent(getPostContent);
  }, [getPostImg, getPostTitle, getPostRecipe, getPostContent]);

  const editEventPost = () => {
    const content = {
      postImg: postImg,
      postTitle: postTitle,
      postRecipe: postRecipe,
      postContent: postContent,
      postId: postId
    };
    dispatch(editEventPostDB(content));
  };

  return (
    <Grid>
      <ImgMargin>
        <RectangleImage edit saveUrl={setPostImg} imgUrl={postImg ? postImg : false} onChange={setPostImg} />
      </ImgMargin>
      <InputMargin>
        <ValidationInput
          important
          label={"제목"}
          value={postTitle}
          setValue={setPostTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
      </InputMargin>
      <InputMargin>
        <ValidationInput
          important
          label={"꿀조합"}
          value={postRecipe}
          setValue={setPostRecipe}
          onChange={(e) => setPostRecipe(e.target.value)}
        />
      </InputMargin>
      <InputMargin>
        <ValidationInput
          label={"내용"}
          value={postContent}
          setValue={setPostContent}
          onChange={(e) => setPostContent(e.target.value)}
          important
          multiline
          rows={3}
        />
      </InputMargin>
      <Controls>
        <WhiteButton
          onClick={() => {
            router.push(`/event/detail/${postId}`);
          }}
          value="취소"
        />
        <RedButton onClick={editEventPost} value="저장" />
      </Controls>
    </Grid>
  );
};

const Grid = styled.div`
  margin : 0px 5%;
`

const ImgMargin = styled.div`
  margin: 50px 0px;
`;
const InputMargin = styled.div`
  margin-bottom: 44px;
`;

const Controls = styled.div`
  display: flex;
  margin-top: 100px;
`;

export default EventPostEdit;
