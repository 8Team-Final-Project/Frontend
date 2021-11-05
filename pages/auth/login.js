import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components"
import { 
    postLogin,
    postLogout,
} from "../../src/Redux/Async/userAsync";

import ValidationInput from "../../src/Components/Input/ValidationInput"
import RedButton from "../../src/Components/Button/RedButton"
import WhiteButton from "../../src/Components/Button/WhiteButton"

import router from "next/router"

const login = () => {
    const dispatch = useDispatch();

    const [userEmail, setuserEmail] = React.useState("");
    const [userPassword, setuserPassword] = React.useState("");
    
    // 로그인 버튼
    const setLogin = () => {
        const login = {
            userEmail : userEmail,
            userPassword : userPassword
        }
        dispatch(postLogin(login))
    }

    // 로그아웃 버튼
    const setLogout = () => {
        const logout = {
            userEmail : userEmail,
            userPassword : userPassword
        }
        dispatch(postLogout(logout))
        localStorage.removeItem("token");
    };
    
    return (
        <Container>
            <wrapContent>
                <div>
                    <ValidationInput 
                        value={userEmail}
                        setValue={setuserEmail}
                        label="이메일"
                    />
                </div>
                {/* <input
                    onChange={(e) => {
                        setuserEmail(e.target.value);
                    }}
                    placeholder="이메일 형식으로 입력해주세요."
                /> */}
                <div style={{
                    marginBottom: "40px"
                    }}
                >
                    <ValidationInput 
                        label="비밀번호" 
                        value={userPassword}
                        setValue={setuserPassword}
                    />
                </div>
                {/* <input
                    onChange={(e) => {
                        setuserPassword(e.target.value);
                    }}
                    placeholder="비밀번호"
                /> */}
                
                <RedButton 
                    onClick={() =>{
                        setLogin()
                        console.log(setLogin)
                    }} 
                    value="로그인"

                />
                <WhiteButton 
                    value="회원가입"
                    onClick={()=>router.push('/auth/signup')}
                />

                {/* <button
                    onClick={() => {
                        setLogin()
                    }}
                >로그인</button> */}

                {/* <button
                    onClick={() => {
                        setLogout()
                    }}
                >로그아웃</button> */}
            </wrapContent>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    width: 500px;
    height: 400px;
`
//왜 적용 안 되지
const wrapContent = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: lightgoldenrodyellow;
`

export default login;


