import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { patchUserid } from "../../Redux/Async/userAsync";

//components
import Modal from "../Shared/Modal";
import CircleImage from "../Shared/CircleImage";
import { postLogout } from "../../Redux/Async/userAsync";

//isOpen : true면 보여주고, false면 모달이 닫힌다.
//handleClose : isOpen을 false로 바꿔주는 함수를 넣어주면 된다.
//handleSave : save시에 동작할 함수를 넣어주면 된다.

export default function MyInfoEditModal({ isOpen, handleClose }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState(""); //닉네임의 변경과 저장을 위한 state
  const [userEmail, setUserEmail] = useState(""); //이메일 변경과 저장을 위한 state

  const nicknameFromStore = useSelector((state) => state.user.user?.userNickname);
  const emailFromsStore = useSelector((state) => state.user.user?.userEmail);

  useEffect(() => {
    if (nicknameFromStore && nicknameFromStore !== nickname) setNickname(nicknameFromStore);
    if (emailFromsStore && emailFromsStore !== userEmail) setUserEmail(emailFromsStore);
  }, [nicknameFromStore, emailFromsStore]);

  const saveUrl = (imgUrl) => {
    //프로필 사진 url 저장하는 함수
    setUserImgUrl(imgUrl);
  };

  const handleSave = () => {
    //유저정보수정하는 함수
    const editProfile = {
      userNickname: nickname,
      userEmail: userEmail
    };
    dispatch(patchUserid(editProfile));

    
    // handleClose();
  };

  // 로그아웃 버튼
  const setLogout = () => {
    dispatch(postLogout());
  };

  //[]유저의 닉네임, 이메일을 받아와서 input에 넣어주기
  //[x]input의 값이 변화되게 하기
  //[]저장버튼을 누르면 프로필 수정이 되게 하기

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isHideDefaultClose height="380px">
      <Container>
        <Content>
          <CircleImage imgUrl={false} saveUrl={saveUrl} edit />
          <InputArea>
            <NicknameInput
              placeholder="닉네임을 입력해주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <EmailInput
              placeholder="이메일을 입력해주세요"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
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
          <button onClick={() => {
                    handleSave();
                  }}>저장
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
