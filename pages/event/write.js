import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

//파티작성페이지
const write = () => {
    // const dispatch = useDispatch();

    // const [post, setPost] = useState("");
    // const onChange = (e) => {
    //     setPost(e.target.value);
    //   };

    // const addPost = () => {
    //     dispatch(commentActions.addCommentAPI(productId, comment));
    // }

    return (
        <div style={{textAlign:"center"}}>
            <h1>포스트 작성</h1>
            제목
            <input/>
            <br/>
            <br/>
            사진첨부?
            <br/>
            <br/>
            내용
            <input/>
            <br/>
            <br/>
            해시태그
            <input/><button>추가하기</button>
            <br/>
            <br/>

            <button>취소</button>
            <button>저장</button>

        </div>
    );
};



export default write;
