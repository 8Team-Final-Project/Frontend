import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCombinationPostDB } from "../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";

//꿀조합 작성페이지
const write = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [postTitle, setTitle] = React.useState("");
    const [postContent, setContent] = React.useState("");
    const [postImg, setImg] = React.useState("");
    const [postTag, setTag] = React.useState("");

    const setPost = () => {
        const postItem = {
            postTitle: postTitle,
            postContent: postContent,
            postImg: postImg,
            postTag: postTag,
            mainlist: true,
            event1list: false,
            event2list: false,
            event3list: false,
        };
        dispatch(addCombinationPostDB(postItem));
    };

    return (
        <div>
            <WriteBox>
                <h1>꿀조합작성페이지</h1>
                <CenterBox>
                    <h2>제목</h2>
                    <WriteInput
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    ></WriteInput>
                </CenterBox>
                <CenterBox>
                    <input
                        type="file"
                        onChange={e => {
                            setImg(e.target.value);
                        }}
                    />
                    <div>10MB이하로 업로드 할 수 있어~</div>
                </CenterBox>
                <CenterBox>
                    <h2>내용</h2>
                    <WriteInput
                        style={{
                            height: "200px",
                            type: "text",
                        }}
                        onChange={e => {
                            setContent(e.target.value);
                        }}
                    />
                </CenterBox>
                <CenterBox>
                    <h2>해시태그</h2>
                    <WriteInput
                        placeholder="태그입력해"
                        onChange={e => {
                            setTag(e.target.value);
                        }}
                    />
                    <FlexBox>
                        <div>태그1</div> <div>태그2</div>
                    </FlexBox>
                </CenterBox>
                <CenterBox>
                    <button
                        onClick={() => {
                            {router.push("/combination")}
                        }}
                    >취소하기
                    </button>
                    <button onClick={()=>{
                        setPost()
                        {router.push("/combination")}
                    }}>저장하기</button>
                </CenterBox>
            </WriteBox>
        </div>
    );
};
const CenterBox = styled.div`
    width: 350px;
    margin: 10px auto;
`;

const WriteBox = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid black;
    margin: auto;
`;

const WriteInput = styled.input`
    width: 350px;
`;

const FlexBox = styled.div`
    display: flex;
`;

export default write;
