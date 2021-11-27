import React from "react";
import { useDispatch } from "react-redux";
import router from "next/router";
import styled from "styled-components";
import Swal from "sweetalert2";

//function
import { postSignup } from "../../src/Redux/Async/userAsync";

import { userApi } from "../../src/Shared/api";

//components
import RedButton from "../../src/Components/Button/RedButton";
import ConfirmValidationInput from "../../src/Components/Input/ConfirmValidationInput";
import ValidationInput from "../../src/Components/Input/ValidationInput";

//regex
import regex from "../../src/Shared/regex";

// import { actionCreators as userActions } from "../redux/modules/user";

const signup = () => {
  const dispatch = useDispatch();
  //값 state
  const [userNickname, setuserNickname] = React.useState("");
  const [userEmail, setuserEmail] = React.useState("");
  const [userPassword, setuserPassword] = React.useState("");
  const [userconfirmPassword, setuserconfirmPassword] = React.useState("");

  //체크 state
  const [isCheckNickname, setIsCheckNickname] = React.useState(false); //nickname을 썼을땐 setisCheckNickname을 썼고, email일땐 setIsCheckEmail 쓰면되겠죠?
  const [isCheckEmail, setIsCheckEmail] = React.useState(false);
  const setSignup = () => {
    const signup = {
      userEmail,
      userNickname,
      userPassword,
      userconfirmPassword
    };
    if (userPassword === userconfirmPassword) {
      return dispatch(postSignup(signup));
    } else {
      Swal.fire("비밀번호를 체크해주세요", "", "warning");
    }
  };

  const handleCheckNickname = () => {
    const nickname = {
      userNickname
    };
    //여기서 바로 api 연결해서, 사용가능한 것으로 확인되면 바로 setIsCheckNickname을 true로 바꿔줍니다. isCheckNickname이 true면 방금처럼 '확인' 으로 바뀝니다.
    userApi
      .checknick(nickname)
      .then((res) => {
        if (res.statusText === "OK") {
          Swal.fire("사용 가능한 닉네임입니다", "", "success");
          setIsCheckNickname(true);
        }
      })
      .catch((err) => Swal.fire("중복된 닉네임입니다!", "", "warning"));
  };

  const handleCheckEmail = () => {
    const checkemail = {
      userEmail
    };

    userApi
      .checkemail(checkemail)
      .then((res) => {
        if (res.statusText === "OK") {
          Swal.fire("사용 가능한 이메일입니다", "", "success");
          setIsCheckEmail(true);
        }
      })
      .catch((err) => Swal.fire("중복된 이메일입니다!", "", "warning"));
  };

  return (
    <Wrap>
      <MarginBottom>
        <InputWrap>
          <ConfirmValidationInput
            label="닉네임"
            value={userNickname} //벨류를 담는 state
            setValue={setuserNickname} //벨류를 변경시키는 setState
            handleValueCheck={handleCheckNickname} //서버랑 연결해서 ok뜨면 true로 바꿔주는 함수 만들기
            isCheck={isCheckNickname} //check했는지 안했는지 담는 state
            setIsCheck={setIsCheckNickname} //isCheck를 변경시키는 setState
            regexCheck={regex.nickname} //정규식 shared/regex 에서 가져와서 사용하세요.
            errorText="특수문자 제외 3글자 이상 작성해 주세요! " //식이랑 맞지 않을때 보여줄 텍스트
            defaultText="닉네임을 입력해 주세요!" //아무것도 적히지 않았을때 보여줄 텍스트
            maxValue={10} //최대길이
            successText=" ✓ 사용할 수 있는 닉네임입니다."
            //successText도 사용하면 성공했을때 텍스트를 보여줄 수 있어요
          />
        </InputWrap>
        <InputWrap>
          <ConfirmValidationInput
            label="이메일"
            value={userEmail}
            setValue={setuserEmail}
            handleValueCheck={handleCheckEmail}
            isCheck={isCheckEmail}
            setIsCheck={setIsCheckEmail}
            regexCheck={regex.email}
            errorText="이메일 형식에 맞게 입력해 주세요!"
            defaultText="이메일을 입력해 주세요!"
            successText=" ✓ 사용할 수 있는 이메일입니다"
          />
        </InputWrap>
        <InputWrap>
          <ValidationInput
            label="비밀번호"
            value={userPassword}
            setValue={setuserPassword}
            regexCheck={regex.password}
            errorText="특수문자 제외 영문, 숫자 포함 6글자 이상 입력해 주세요!"
            defaultText="비밀번호를 입력해 주세요!"
            successText=" ✓ 사용할 수 있는 비밀번호입니다"
            type="password"
          />
        </InputWrap>
        <InputWrap>
          <ValidationInput
            label="비밀번호 확인"
            value={userconfirmPassword}
            setValue={setuserconfirmPassword}
            type="password"
            errorText=" "
            defaultText=" "
            successText=" "
          />
        </InputWrap>
      </MarginBottom>
      <Btn>
        <RedButton
          onClick={() => {
            setSignup();
          }}
          value="회원가입"
          style={{
            marginBottom: "50px"
          }}
        />
      </Btn>
      <Center>
        <CancelButton onClick={() => router.push("/")}>취소</CancelButton>
      </Center>
    </Wrap>
  );
};

const Wrap = styled.div`
  padding: 5%;
`;

const MarginBottom = styled.div`
  margin: 3% 0px 25%;
`;
const InputWrap = styled.div`
  margin-bottom: 8%;
`;

const Btn = styled.div`
  width: 100%;
`;

const Center = styled.div`
  margin: auto;
`;

const CancelButton = styled.div`
  color: #b8b8b8;
  text-align: center;
  margin: 30px;
  font-size: 18px;
  cursor: pointer;
`;

export default signup;
