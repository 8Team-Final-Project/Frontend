import React, { useEffect } from "react";
import styled from "styled-components";
import PostSaveBtn from "../src/Components/Mypage/PostSaveBtn";
import CircleImage from "../src/Components/Shared/CircleImage";
import Modal from "../src/Components/Shared/Modal";

import { useDispatch, useSelector } from "react-redux";


//마이페이지 첫 렌더링시 메이블린 api 가져와서 list에 저장하기
const mypage = (props) => {
    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.user.user)
    

    return (
        <div>
            <CircleImage />
            <div style={{
                width: "100%",
                // margin: "auto" 안 됨 
            }}>
                <h1>{userProfile&&userProfile.userNickname}</h1>
                <P>{userProfile&&userProfile.userEmail}</P>
            </div>
            <PostSaveBtn />
            <Modal />
        </div>
    );
};

const P = styled.p`
    color: #B8B8B8;
`

export default mypage;