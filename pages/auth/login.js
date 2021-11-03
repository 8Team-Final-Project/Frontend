import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
    postLogin,
    postLogout,
} from "../../src/Redux/Async/userAsync";

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
        <div>
            <h1>로그인</h1>
            <h4>아이디</h4>
            <input
                onChange={(e) => {
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
                    setLogin()
                }}
            >로그인</button>

            <button
                onClick={() => {
                    setLogout()
                }}
            >로그아웃</button>
        </div>
    );
};

export default login;


