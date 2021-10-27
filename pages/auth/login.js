import React from "react";


const login = (props) => {
    
    


    return (
        <div>
            <h1>로그인</h1>
            <h4>아이디</h4>
            <input
                label="아이디"
                placeholder="이메일 형식으로 입력해주세요."
            />

            <h4>비밀번호</h4>
            <input
                label="비밀번호"
                placeholder="비밀번호를 입력해주세요."
            />

            <h4>비밀번호 확인</h4>
            <input
                label="비밀번호"
                placeholder="비밀번호를 재입력해주세요."
            />
        </div>
    );
};

export default login;


