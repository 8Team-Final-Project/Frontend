import { createSlice } from "@reduxjs/toolkit";
import { postSignup, postLogin, postLogout, Me, patchUserid } from "../Async/userAsync";

const initialState = {
  isFetching: false,
  errorMessage: null,
  isLogin: false,
  user: null
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    // 회원가입
    [postSignup.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.errorMessage = null;
    },
    [postSignup.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [postSignup.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    // 로그인
    [postLogin.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.errorMessage = null;
      state.isLogin = true;
    },
    [postLogin.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [postLogin.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    // 로그아웃
    [postLogout.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.errorMessage = null;
      state.isLogin = false;
      state.user = null;
    },
    [postLogout.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [postLogout.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    // 로그인 체크 && 유저정보 가져오기
    [Me.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.user = payload;
      state.isLogin = true;
      state.errorMessage = "";
    },
    [Me.pending]: (state, { payload }) => {
      state.isFetching = false;
    },
    [Me.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    // 프로필 수정 
    [patchUserid.fulfilled]: (state, { payload }) => {
      state.user.userImg = payload.userImg
      state.user.userNickname = payload.userNickname;
      state.user.userEmail = payload.userEmail;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [patchUserid.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [patchUserid.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    }
  }
});

export default userSlice;
