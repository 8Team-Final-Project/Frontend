import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../Shared/api";
import { useRouter } from "next/dist/client/router";

// 미들웨어

// 회원가입
export const postSignup = createAsyncThunk(
    "/user/postSignup",
    async (data, thunkAPI) => {
        try {
            const response = await userApi.signup(data);
            if(response.data.result==='success') {
                window.alert('회원가입 완료')
                return response.data.msg
            };
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 이메일 중복 확인
export const postCheckEmail = createAsyncThunk(
    "/user/postCheckEmail",
    async (data, thunkAPI) => {
        try {
            const response = await userApi.checkemail(data);
            if(response.data.message==="사용 가능 이메일 입니다.") {
                window.alert('사용 가능한 이메일입니다!')
                return response.data.msg
            };
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 닉네임 중복 확인
export const postCheckNic = createAsyncThunk(
    "/user/postCheckNic",
    async (data, thunkAPI) => {
        try {
            const response = await userApi.checknick(data);
            if(response.data.message==="사용 가능한 닉네임 입니다.") {
                window.alert('사용 가능한 닉네임입니다!')
                return response.data.msg
            };
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);


// 로그인
export const postLogin = createAsyncThunk(
  "user/postLogin",
  async (data, thunkAPI) => {
      try {
          const response = await userApi.login(data);
          const token = response.data.token
          localStorage.setItem("token", token)
          if(response.data.result==="success") {
              window.alert("로그인 완료!")
              return response.data.msg
            };
      } catch (err) {
          return thunkAPI.rejectWithValue(err.response.message);
      }
  }
);

// 로그인 유지
export const LoginCheck = createAsyncThunk(
    "user/LoginCheck",
    async (data, thunkAPI) => {
        // 로컬 스토리지 토큰 불러오기
        // const token = localStorage.getItem("token")
        // const { userEmail: userEmail } = jwt(token);
        try {
            // 서버에 유저 정보 요청
            const response = await userApi.loginCheck(data);
            if (response.data.isLogin===true) {
                return response.data.userNickname
            }
        } catch (err) {
            // 에러 발생시 에러 메세지 반환
            return thunkAPI.rejectWithValue(err.response.data.message);
        }
    }
  );

// 로그아웃
export const postLogout = createAsyncThunk(
  "user/postLogout",
  async (data, thunkAPI) => {
      try {
          const response = await userApi.logout(data);
          if(response.data.result==="success") {
              window.alert("로그아웃 완료")
              return response.data.msg
            };
      } catch (err) {
          return thunkAPI.rejectWithValue(err.response.message);
      }
  }
);