import React, { useState } from "react";
import styled from "styled-components";
import { useRouter} from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { editEventPostDB } from "../../../src/Redux/Async/eventAsync";

//Component
import RectangleImage from '../../../src/Components/Shared/RectangleImage';
import CommonInput from "../../../src/Components/Input/ValidationInput";
import RedButton from '../../../src/Components/Button/RedButton';
import WhiteButton from '../../../src/Components/Button/WhiteButton';



//파티수정페이지
const PartyEdit = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const postId = useRouter().query.id;
  const post = useSelector((state) => state.event.post)

  const [postImg, setPostImg] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postRecipe, setPostRecipe] = useState("");
  const [postContent, setPostContent] = useState("");

  const editEventPost = () => {
    const content = {
      postImg : postImg,
      postTitle: postTitle,
      postRecipe : postRecipe,
      postContent: postContent,
      postId: postId
    };
    dispatch(editEventPostDB(content));
  };

  return (
    <div>
    <ImgMargin>
    <RectangleImage
            edit
            saveUrl={setPostImg}
            imgUrl={postImg? postImg : false}
            />
    </ImgMargin>
    <InputMargin>
    <CommonInput
        important
        label={"제목"}
        value={post && post.postTitle, postTitle}
        setValue={setPostTitle}
    />
    </InputMargin>
    <InputMargin>
    <CommonInput
        important
        label={"꿀조합"}
        value={postRecipe}
        setValue={setPostRecipe}
    />
    </InputMargin>
    <InputMargin>
    <CommonInput 
        label={"내용"}
        value={post && post.postContent}
        setValue={setPostContent}
        important
        multiline
        rows={3}
        />
    </InputMargin>
    <Controls>
        <WhiteButton onClick={()=>{router.push(`/event/detail/${postId}`)}} value='취소'/>
        <RedButton onClick={editEventPost} value='저장'/>
    </Controls>
</div>
  );
};


const ImgMargin = styled.div`
  margin : 50px 0px;
`
const InputMargin = styled.div`
  margin-bottom : 44px;
`

const Controls = styled.div`
display:flex;
margin-top : 100px;
`


export default PartyEdit;
