import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { addEventPostDB } from "../../src/Redux/Async/eventAsync" 
import styled from "styled-components";

//파티작성페이지
const write = () => {
    const dispatch = useDispatch();

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const addEventPost = () => {
        const content = {
            postTitle : postTitle,
            postContent : postContent
        }
        dispatch(addEventPostDB(content));
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>포스트 작성</h1>
            제목
            <input onChange={(e) => {
                console.log(e.target.value);
                setPostTitle(e.target.value);
            }}/>
            <br/>
            <br/>
            사진첨부?
            <br/>
            <br/>
            내용
            <input onChange={(e) => {
                console.log(e.target.value);
                setPostContent(e.target.value);
            }}/>
            <br/>
            <br/>
            해시태그
            <input/><button>추가하기</button>
            <br/>
            <br/>

            <button>취소</button>
            <button onClick={addEventPost}>저장</button>

        </div>
    );
};



export default write;
