import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { 
    postSignup,
    postCheckEmail,
    postCheckNic,
} from "../../src/Redux/Async/userAsync";
// import { actionCreators as userActions } from "../redux/modules/user";


const Signup = () => {
    const dispatch = useDispatch();
    
    const [userEmail, setuserEmail] = React.useState("");
    const [userNickname, setuserNickname] = React.useState("");
    const [userPassword, setuserPassword] = React.useState("");
    const [userconfirmPassword, setuserconfirmPassword] = React.useState("");


    const setSignup = () => {
    
        const signup = {
            userEmail : userEmail,
            userNickname : userNickname,
            userPassword : userPassword,
            userconfirmPassword : userconfirmPassword
        }
        dispatch(postSignup(signup))
    };

    const setCheckEmail = () => {
        const checkemail = {
            userEmail : userEmail
        }
        dispatch(postCheckEmail(checkemail))
    };

    const setCheckNick = () => {
        const nickname = {
            userNickname : userNickname
        }
        dispatch(postCheckNic(nickname))
    };

    


    return (
        <div style={{
            paddingLeft: "10px"
        }}>
            <h1>회원가입</h1>

            <div>
                <p>아이디</p>
                <input
                    onChange={(e) => {
                        console.log(e.target.value)
                        setuserEmail(e.target.value);
                      }}
                      placeholder="이메일 형식으로 입력해주세요."
                />
                <button
                    onClick={() => {
                        console.log("이메일중복버튼")
                        setCheckEmail()
                    }}
                >
                    중복확인
                </button>
            </div>
            
            <div>
                <p>닉네임</p>
                <input
                    onChange={(e) => {
                        setuserNickname(e.target.value);
                        }}
                        placeholder="닉네임을 입력해주세요."
                />
                <button
                    onClick={() => {
                        console.log("닉네임중복버튼")
                        setCheckNick()
                    }}
                >
                    중복확인
                </button>
            </div>

            <p>비밀번호</p>
            <input
                onChange={(e) => {
                    setuserPassword(e.target.value);
                    }}
                    placeholder="비밀번호를 입력해주세요."
            />

            <p>비밀번호 확인</p>
            <input
                onChange={(e) => {
                    setuserconfirmPassword(e.target.value);
                    }}
                    placeholder="비밀번호를 한번 더 입력해주세요."
            />

            <br/>
            <br/>

            <button>취소</button>
            <button 
                onClick={() => {
                    console.log("회원가입버튼눌림")
                    setSignup()
                }}

                style={{
                    marginRight: "10px"
                }}>

                회원가입
            </button>


        </div>
    );
};

export default Signup;
