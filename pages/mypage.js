import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import PostSaveBtn from "../src/Components/Mypage/PostSaveBtn";
import CircleImage from "../src/Components/Shared/CircleImage";
import CommentEditDelete from "../src/Components/Shared/CommentEditDelete";
import MyInfoEditModal from "../src/Components/Mypage/MyInfoEditModal";

import { useSelector } from "react-redux";
import { FaPencilAlt } from "react-icons/fa"

//마이페이지 첫 렌더링시 메이블린 api 가져와서 list에 저장하기
const mypage = (props) => {
  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.user.user);
  const Profile = useSelector((state) => state.event.list);
  console.log(userProfile)
  const [modalOpen, setModalOpen] = useState(false)


  return (
    <Container>
      <ProfileBox>
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

      {/* <div>
        setPost()
      </div> */}

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
