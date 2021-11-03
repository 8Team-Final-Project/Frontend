import React, {useState} from "react";
import styled from "styled-components";

import Router, { useRouter } from "next/router";
import { useDispatch } from 'react-redux';
import { editEventPostDB } from '../../../src/Redux/Async/eventAsync';

//파티수정페이지
const PartyEdit = () => {
    const dispatch = useDispatch();
    const postId = Router.router.query.id

    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");

    const editEventPost = () => {
    
        const content = {

            postTitle : postTitle,
            postContent : postContent,
            postId : postId
        }
        dispatch(editEventPostDB(content));
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>포스트 수정</h1>
            제목
            <input onChange={(e) => {
                setPostTitle(e.target.value);
            }}/>
            <br/>
            <br/>
            사진첨부?
            <br/>
            <br/>
            내용
            <input onChange={(e) => {
                setPostContent(e.target.value);
            }}/>
            <br/>
            <br/>
            해시태그
            <input/><button>추가하기</button>
            <br/>
            <br/>
            <button>취소</button>
            <button onClick={editEventPost}>수정</button>

        </div>
    );
};




export default PartyEdit;
