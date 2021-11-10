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
    <>
      <ProfileBox>
        
        <ProfileCenter>

          <ProfileCircle> {/* 프로필 감싸는 박스*/}
            <CircleImage /> {/* 프로필 */}
          </ProfileCircle>
          
          <ProfileEdit> {/* 프로필 수정 버튼 배경 */}
            <PenBox> {/* 연필 아이콘 감싸는 박스 */}
              <PencilAlt onClick={ ()=>{ setModalOpen(true) } }> {/* 연필 아이콘 감싸는 버튼 */}
                <FaPencilAlt /> {/* 연필 아이콘*/}
              </PencilAlt>
            </PenBox>
          </ProfileEdit>

        </ProfileCenter>

      </ProfileBox>

      <Center>
        <h1>{userProfile && userProfile.userNickname}</h1>
        <P>{userProfile && userProfile.userEmail}</P>

        <button 
          onClick={() =>{
            setLogout()
          }} 
          value="로그아웃"
        ></button>
      </Center>


      {/* 프로필 수정 */}
      <MyInfoEditModal isOpen={modalOpen} handleClose={() => setModalOpen(false)}/>
      
      
      {/* 작성글 저장글 */}
      <PostSaveBtn />
    </>
  );
};

const P = styled.p`
  color: #b8b8b8;
`;

const Container = styled.div`
  /* text-align: center; */
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  position: relative;
`

const ProfileCenter = styled.div`
  
`

//프로필 이미지 원 박스
const ProfileCircle = styled.div`
  margin: auto;
`
//프로필 이미지 원 안에 펜
const PenBox = styled.div`
  position: absolute;
  margin-left: -5px;
  margin-top: 9px;
`

//프로필 수정 버튼 배경
const ProfileEdit = styled.div`
  background-color: #FF7775;
  width:40px;
  height:40px;
  border-radius: 50px;
  position: relative;
  top: -30%;
  left: 70%;
  `
const PencilAlt = styled.button`
  color: white;
  font-size: 20px;
  position: absolute;
  margin-left: 10px;
  align: center;
`

const Center = styled.div`
  text-align: center;
  margin-bottom : 6%;
`



export default mypage;
