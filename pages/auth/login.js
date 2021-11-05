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
            <div>
                <MarginBottom>
                    <ValidationInput 
                        value={userEmail}
                        setValue={setuserEmail}
                        label="이메일"
                    />
                </MarginBottom>

                <MarginBottom style={{ marginBottom: "40px" }}>
                    <ValidationInput 
                        label="비밀번호" 
                        value={userPassword}
                        setValue={setuserPassword}
                    />
                </MarginBottom>
                
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
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: center;
`
const MarginBottom = styled.div`
    margin-bottom: 20px;
`

export default login;


