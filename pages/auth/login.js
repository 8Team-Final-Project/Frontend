import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLoginList } from "../../src/Redux/Async/loginAsync";


const login = () => {
    const dispatch = useDispatch();

    const [userEmail, setuserEmail] = React.useState("");
    const [userPassword, setuserPassword] = React.useState("");
    
    const setLogin = () => {
        const login = {
            userEmail : userEmail,
            userPassword : userPassword
        }
        dispatch(getLoginList(login))
    };
    return (
        <div>
            <h1>로그인</h1>
            <h4>아이디</h4>
            <input
                onChange={(e) => {
                    console.log(e.target.value)
                    setuserEmail(e.target.value);
                  }}
                  placeholder="이메일 형식으로 입력해주세요."
            />

            <h4>비밀번호</h4>
            <input
                onChange={(e) => {
                    setuserPassword(e.target.value);
                    }}
                    placeholder="비밀번호를 입력해주세요."
            />
            
            <button
                onClick={() => {
                    console.log("로그인버튼눌림")
                    setLogin()
                }}
            >로그인하기</button>
        </div>
    );
};

export default login;


