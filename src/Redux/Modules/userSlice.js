import { createSlice } from "@reduxjs/toolkit";
import { 
    postSignup,
    postLogin,
    postCheckEmail,
    postCheckNic,
    postLogout,
    Me,
    patchUserid
 } from "../Async/userAsync";

const initialState = {
    isPatching: false,
    errorMessage: null,
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

        // 이메일 중복 확인
        [postCheckEmail.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = null;
        },
        [postCheckEmail.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [postCheckEmail.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        // 닉네임 중복 확인
        [postCheckNic.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = null;
        },
        [postCheckNic.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [postCheckNic.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        // 로그인
        [postLogin.fulfilled]: (state, { payload }) => {
          state.isFetching = false;
          state.errorMessage = null;
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
            state.isFetching = false;
            state.errorMessage = null;
          },
          [patchUserid.pending]: (state, { payload }) => {
              state.isFetching = true;
          },
          [patchUserid.rejected]: (state, { payload: errorMessage }) => {
              state.isFetching = false;
              state.errorMessage = errorMessage;
          },
    }
});

// export const {} = userSlice.actions;

export default userSlice;