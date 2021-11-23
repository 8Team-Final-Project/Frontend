//myinfoeditmodal
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

//components
import Modal from "../Shared/Modal";
import CircleImage from "../Shared/CircleImage";
import ConfirmValidationInput from "../Input/ConfirmValidationInput";

//api
import { patchUserid } from "../../Redux/Async/userAsync";
import { userApi } from "../../Shared/api";

//regex
import regex from "../../Shared/regex";

//isOpen : true면 보여주고, false면 모달이 닫힌다.
//handleClose : isOpen을 false로 바꿔주는 함수를 넣어주면 된다.
//handleSave : save시에 동작할 함수를 넣어주면 된다.

export default function MyInfoEditModal({ isOpen, handleClose }) {
  const dispatch = useDispatch();

  //중복체크했는지 안했는지 여부값
  const [isCheckNickname, setIsCheckNickname] = useState(true);
  const [isCheckEmail, setIsCheckEmail] = useState(true);

  //input 값을 담는 state
  const [userImg, setUserImg] = useState("");
  const [nickname, setNickname] = useState(""); //닉네임의 변경과 저장을 위한 state
  const [userEmail, setUserEmail] = useState(""); //이메일 변경과 저장을 위한 state

  //기존 유저정보값
  const userImgFromStore = useSelector((state) => state.user.user?.userImg);
  const nicknameFromStore = useSelector((state) => state.user.user?.userNickname);
  const emailFromsStore = useSelector((state) => state.user.user?.userEmail);

  useEffect(() => {
    //기존 유저네임,유저이메일을 state에 저장하는 함수

    if (userImgFromStore && userImgFromStore !== userImg) setNickname(userImgFromStore);
    if (nicknameFromStore && nicknameFromStore !== nickname) setNickname(nicknameFromStore);
    if (emailFromsStore && emailFromsStore !== userEmail) setUserEmail(emailFromsStore);
  }, [nicknameFromStore, emailFromsStore]);

  const saveUrl = (imgUrl) => {
    //프로필 사진 url 저장하는 함수
    setUserImgUrl(imgUrl);
  };

  const handleSave = () => {
    //유저정보수정하는 함수
    if (isCheckEmail === true && isCheckNickname === true) {
      const editProfile = {
        userImg: userImg,
        userNickname: nickname,
        userEmail: userEmail
      };
      dispatch(patchUserid(editProfile));
      handleClose();
    }
    if (isCheckEmail === false || isCheckNickname === false) {
      alert("중복 확인을 체크해주세요!");
    }
  };

  const handleCheckNickname = () => {
    //유저네임 중복체크하는 함수
    const nickname = {
      userNickname: nickname
    };
    //여기서 바로 api 연결해서, 사용가능한 것으로 확인되면 바로 setIsCheckNickname을 true로 바꿔줍니다. isCheckNickname이 true면 방금처럼 '확인' 으로 바뀝니다.
    userApi
      .checknick(nickname)
      .then((res) => {
        if (res.statusText === "OK") {
          alert("사용가능한 닉네임입니다");
          setIsCheckNickname(true);
        }
      })
      .catch((err) => alert("사용 중인 닉네임입니다"));
  };

  const handleCheckEmail = () => {
    //유저이메일 중복체크하는 함수
    const checkemail = {
      userEmail
    };

    userApi
      .checkemail(checkemail)
      .then((res) => {
        if (res.statusText === "OK") {
          alert("사용 가능한 이메일입니다");
          setIsCheckEmail(true);
        }
      })
      .catch((err) => alert("사용 중인 이메일입니다"));
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} isHideDefaultClose height="auto" width="100%">
      <Container>
        <Content>
          <CircleImage edit imgUrl={userImg ? userImg : false} saveUrl={setUserImg} onChange={setUserImg} />
          <InputArea>
            <ConfirmValidationInput
              value={nickname}
              setValue={setNickname}
              handleValueCheck={handleCheckNickname} //서버랑 연결해서 ok뜨면 true로 바꿔주는 함수 만들기
              isCheck={isCheckNickname} //check했는지 안했는지 담는 state
              setIsCheck={setIsCheckNickname} //isCheck를 변경시키는 setState
              regexCheck={regex.nickname} //정규식 shared/regex 에서 가져와서 사용하세요.
              errorText="3글자 이상부터 가능해요!" //식이랑 맞지 않을때 보여줄 텍스트
              defaultText="닉네임을 입력해주세요!" //아무것도 적히지 않았을때 보여줄 텍스트
              maxValue={10}
            />
            <ConfirmValidationInput
              value={userEmail}
              setValue={setUserEmail}
              handleValueCheck={handleCheckEmail}
              isCheck={isCheckEmail}
              setIsCheck={setIsCheckEmail}
              regexCheck={regex.email}
              errorText="2글자 이상 입력해주세요!"
              defaultText="이메일을 입력해주세요!"
            />
          </InputArea>
        </Content>
        <Controls>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleSave}>저장</button>
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
  padding: 50px 25px 38px 25px;
`;

const InputArea = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  input {
    margin-top: 26px;
  }
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid #d9d9d9;
  button {
    padding: 20px 16px;
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
