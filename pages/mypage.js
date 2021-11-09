import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import EventPost from "../src/Components/Layout/EventPost"


import styled from "styled-components";
import PostSaveBtn from "../src/Components/Mypage/PostSaveBtn";
import CircleImage from "../src/Components/Shared/CircleImage";
import MyInfoEditModal from "../src/Components/Mypage/MyInfoEditModal";

import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa"
import { BsThreeDotsVertical } from "react-icons/bs";


import { postLogout } from "../src/Redux/Async/userAsync";

// import router from "next/router"

//마이페이지 첫 렌더링시 메이블린 api 가져와서 list에 저장하기
const mypage = (props) => {
  const dispatch = useDispatch();

  //로그아웃
  const [userEmail, setuserEmail] = React.useState("");
  const [userPassword, setuserPassword] = React.useState("");

  //닉네임, 이메일 불러오기
  const userProfile = useSelector((state) => state.user.user);

  //수정 모달창
  const [modalOpen, setModalOpen] = useState(false)

  // 로그아웃 버튼
  const setLogout = () => {
    dispatch(postLogout())
  };

  return (
    <Container>
      <ProfileBox>
        <MoreBtn>
          <BsThreeDotsVertical/>
        </MoreBtn>
        {/* 프로필 */}
        <CircleImage style={{
          position: "relative"
        }} />

        {/* 프로필 수정 버튼 배경 */}
        <ProfileEdit>
          {/* 프로필 수정 버튼 연필 */}
          <Button onClick={ ()=>{ setModalOpen(true) } }><FaPencilAlt style={{
            color: "white",
            fontSize: "20px"
          }} /></Button>
        </ProfileEdit>
      </ProfileBox>

      <div>
        <h1>{userProfile && userProfile.userNickname}</h1>
        <P>{userProfile && userProfile.userEmail}</P>
      </div>

      <button 
          onClick={() =>{
            setLogout()
          }} 
          value="로그아웃"
      >로그아웃</button>


      {/* 프로필 수정 */}
      <MyInfoEditModal isOpen={modalOpen} handleClose={() => setModalOpen(false)}/>
      
      
      {/* 작성글 저장글 */}
      <PostSaveBtn />

      {/* <CommentEditDelete /> */}
    </Container>
  );
};

const P = styled.p`
  color: #b8b8b8;
`;

const Container = styled.div`
  text-align: center;
`;

const ProfileBox = styled.div`
  position: relative;
  height: 150px;
`

const MoreBtn = styled.div`
  position: absolute;
  display: flex;
`

const ProfileEdit = styled.div`
  background-color: #FF7775;
  width:40px;
  height:40px;
  border-radius: 50px;
  position: relative; left:265px; top: -50px;
`

const Button = styled.button`
  position: absolute; right: 4px; top: 9px;
`


export default mypage;
