import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addEventPostDB } from "../../src/Redux/Async/eventAsync" 
import HashTagInput from "../../src/Components/Input/HashTagWriteInput"
import CommonInput from "../../src/Components/Input/ValidationInput.jsx"
import router from "next/router"
import styled from "styled-components";

//파티작성페이지
const write = () => {
    const dispatch = useDispatch();

    const [postTitle, setPostTitle] = useState("");
    const [postSubtitle, setPostSubtitle ] = useState("");
    const [postRecipe, setPostRecipe ] = useState("");
    const [postContent, setPostContent] = useState("");
    const [postTag, setPostTag] = useState();
    const [mainlist, setMainList] = useState(false);
    const [event1list, setEvent1list] = useState(true);
    const [event2list, setEvent2list] = useState(false);
    const [event3list, setEvent3list] = useState(false);


    const addEventPost = () => {
        const content = {
            postTitle : postTitle,
            postSubtitle : postSubtitle,
            postRecipe : postRecipe,
            postContent : postContent,
            postTag : postTag,
            mainlist: mainlist,
            event1list: event1list,
            event2list: event2list,
            event3list: event3list
        }
        dispatch(addEventPostDB(content));
    }

    return (
        <div>
            <img/>사진<button>사진추가</button>
            <CommonInput
                important
                label={"제목"}
                value={postTitle}
                setValue={setPostTitle}
            />
            <br/>
            <CommonInput
                important
                label={"소개"}
                value={postSubtitle}
                setValue={setPostSubtitle}
            />
            <br/>
            <CommonInput
                important
                label={"꿀조합"}
                value={postRecipe}
                setValue={setPostRecipe}
            />
            <br/>
            <CommonInput 
                label={"내용"}
                value={postContent}
                setValue={setPostContent}
                important
                multiline
                rows={3}
                />
                <br/>
            <HashTagInput
                important
                label="해시태그"
                tagList={postTag}
                setTagList={setPostTag}
            />
            <button onClick={()=>{router.push("/event")}}>취소</button>
            <button onClick={addEventPost}>저장</button>
           
        </div>
    );
};



export default write;
