import { createSlice } from "@reduxjs/toolkit";
import { 
    postSignup,
    postLogin,
    postCheckEmail,
    postCheckNic,
    postLogout,
    LoginCheck
 } from "../Async/userAsync";

 // 질문 이벤트 페이지에는 어떻게 생성 된건지?
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

        // 로그인 유지
        [LoginCheck.pending]: (state, { payload }) => {
            state.isLogin = true;
        },
        [LoginCheck.fulfilled]: (state, { payload }) => {
            state.isFetching = false;
            state.user = payload;
            state.isLogin = true;
            state.errorMessage = "";
        },
        [LoginCheck.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    }
});

// export const {} = userSlice.actions;

export default userSlice;