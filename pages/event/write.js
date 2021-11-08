import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addEventPostDB } from "../../src/Redux/Async/eventAsync" 
import router from "next/router"
import styled from "styled-components";

//components
import RectangleImage from '../../src/Components/Shared/RectangleImage';
import WhiteButton from '../../src/Components/Button/WhiteButton';
import RedButton from '../../src/Components/Button/RedButton';
import CommonInput from "../../src/Components/Input/ValidationInput.jsx"
import HashTagInput from "../../src/Components/Input/HashTagWriteInput"

//이벤트 게시글 작성페이지
const write = () => {
    const dispatch = useDispatch();


    const [postImg, setPostImg] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [postRecipe, setPostRecipe ] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postTag, setPostTag] = useState();
    const [mainlist, setMainList] = useState(false);
    const [event1list, setEvent1list] = useState(true);
    const [event2list, setEvent2list] = useState(false);
    const [event3list, setEvent3list] = useState(false);


    const addEventPost = () => {
        const content = {
            postImg: postImg,
            postTitle : postTitle,
            postRecipe : postRecipe,
            postContent : postContent,
            postTag : postTag,
            mainlist: mainlist,
            event1list: event1list,
            event2list: event2list,
            event3list: event3list
        }
        dispatch(addEventPostDB(content));
        router.push("/event")
    }

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
                value={postTitle}
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
                value={postContent}
                setValue={setPostContent}
                important
                multiline
                rows={3}
                />
            </InputMargin>
            <InputMargin>
            <HashTagInput
                important
                label="해시태그"
                tagList={postTag}
                setTagList={setPostTag}
            />
            </InputMargin>
            <Controls>
                <WhiteButton onClick={()=>{router.push("/event")}} value='취소'/>
                <RedButton onClick={addEventPost} value='저장'/>
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


export default write;
