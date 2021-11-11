import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

//components
import Modal from "../Shared/Modal";
import CircleImage from "../Shared/CircleImage";
import { postLogout } from "../../Redux/Async/userAsync";

//isOpen : true면 보여주고, false면 모달이 닫힌다.
//handleClose : isOpen을 false로 바꿔주는 함수를 넣어주면 된다.
//handleSave : save시에 동작할 함수를 넣어주면 된다.

export default function MyInfoEditModal({ isOpen, handleClose }) {
  const [userInfo, setUserInfo] = useState({ nickname: "", email: "", imgUrl: "" });
  //추후 로그인유지를 통해 유저정보를 받아오게되면 유저정보를 setUserInfo 해주면 됨!

  const saveUrl = (imgUrl) => {
    //프로필 사진 url 저장하는 함수
    setUserInfo({ ...userInfo, imgUrl });
  };

  const handleSave = () => {
    //유저정보수정하는 함수
    handleClose();
  };

  const dispatch = useDispatch();

  // 로그아웃 버튼
  const setLogout = () => {
    dispatch(postLogout());
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isHideDefaultClose height="380px">
      <Container>
        <Content>
          <CircleImage imgUrl={false} saveUrl={saveUrl} edit />
          <InputArea>
            <NicknameInput placeholder="닉네임을 입력해주세요" value={userInfo.nickname} />
            <EmailInput placeholder="이메일을 입력해주세요" value={userInfo.email} />
          </InputArea>
          <button
            onClick={() => {
              setLogout();
            }}
            value="로그아웃"
          >
            로그아웃
          </button>
        </Content>
        <Controls>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleSave} handleClose>
            저장
          </button>
        </Controls>
      </Container>
    </Modal>
  );
}

MyInfoEditModal.defaultProps = {
  isOpen: false,
  handleClose: () => {},
  handleSave: () => {},
  nickname: null,
  email: null,
  imgUrl: null
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const InputArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    margin-top: 26px;
    border: none;
    outline: none;
    text-align: center;
  }
`;

const NicknameInput = styled.input`
  font-size: 24px;
  color: #3c3c3c;
`;
const EmailInput = styled.input`
  font-size: 24px;
  color: #b8b8b8;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #d9d9d9;
  button {
    padding: 16px;
    font-size: 18px;
    width: 100%;
  }
  button:first-child {
    border-right: 1px solid #d9d9d9;
    color: #b8b8b8;
  }
  button:last-child {
    color: #ff7775;
  }
`;
