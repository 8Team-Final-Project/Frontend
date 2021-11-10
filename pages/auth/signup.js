import React from "react";
import { useDispatch } from "react-redux";
import router from "next/router";
import styled from "styled-components";

//function
import { 
    postSignup,
} from "../../src/Redux/Async/userAsync";

import {userApi} from "../../src/Shared/api"

//components
import RedButton from "../../src/Components/Button/RedButton"
import WhiteButton from "../../src/Components/Button/WhiteButton"
import ConfirmValidationInput from "../../src/Components/Input/ConfirmValidationInput"
import ValidationInput from "../../src/Components/Input/ValidationInput"

//regex
import regex from '../../src/Shared/regex'

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
        }
        if(userPassword===userconfirmPassword){
            return dispatch(postSignup(signup));
        }else {
            alert('비밀번호를 체크해주세요')
        }
        
    };

    const handleCheckNickname = () => {
        const nickname = {
            userNickname
        }
        //여기서 바로 api 연결해서, 사용가능한 것으로 확인되면 바로 setIsCheckNickname을 true로 바꿔줍니다. isCheckNickname이 true면 방금처럼 '확인' 으로 바뀝니다.
        userApi.checknick(nickname).then(res=>{if(res.statusText==='OK'){alert('사용가능한 닉네임입니다'); setIsCheckNickname(true);}}).catch(err=>alert(err))
    };

    const handleCheckEmail = () => {
        //여기에도 위랑 똑같이 만들어주면돼요!
        const checkemail = {
            userEmail
        }

        userApi.checkemail(checkemail).then(res=>{if(res.statusText==='OK'){alert('사용 가능한 이메일입니다'); setIsCheckEmail(true);}}).catch(err=>alert(err))
    };

    return (
        <div>
            <MarginBottom>
                <InputWrap>
                <ConfirmValidationInput                 
                    label="닉네임" 
                    value={userNickname}    //벨류를 담는 state
                    setValue={setuserNickname}  //벨류를 변경시키는 setState
                    handleValueCheck={handleCheckNickname}  //서버랑 연결해서 ok뜨면 true로 바꿔주는 함수 만들기
                    isCheck={isCheckNickname}   //check했는지 안했는지 담는 state
                    setIsCheck={setIsCheckNickname} //isCheck를 변경시키는 setState
                    regexCheck={regex.nickname} //정규식 shared/regex 에서 가져와서 사용하세요.
                    errorText='3글자 이상부터 가능해요!'    //식이랑 맞지 않을때 보여줄 텍스트
                    defaultText='닉네임을 입력해주세요!'    //아무것도 적히지 않았을때 보여줄 텍스트
                    maxValue={10}   //최대길이
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
                    errorText='2글자 이상 입력해주세요!'
                    defaultText='이메일을 입력해주세요!'
                />
                </InputWrap>
                <InputWrap>
                <ValidationInput 
                    label="비밀번호" 
                    value={userPassword}
                    setValue={setuserPassword}
                    regexCheck={regex.password}
                    errorText='6글자 이상 입력해주세요!'
                />
                </InputWrap>
                <InputWrap>
                <ValidationInput 
                label="비밀번호 확인"
                value={userconfirmPassword}
                setValue={setuserconfirmPassword}
                />
                </InputWrap>
            </MarginBottom>

            <br/>
            <br/>


            <RedButton 
                onClick={() => {
                    setSignup()
                }} 
                value="회원가입"
                style={{
                    marginBottom: "50px"
                }}
            />
            <br/>
            <WhiteButton
                value="취소"
                onClick={() => router.push('/')}
            />
        </div>
    );
};

const MarginBottom = styled.div`
    margin: 12% 0px;
`
const InputWrap = styled.div`
    margin-bottom : 12%;

`

export default signup;
