import { createSlice } from "@reduxjs/toolkit";
import { postSignupList } from "../Async/signupAsync";

const initialState = {
    list: [],
    isPatching: false,
    errorMessage: null,
};
const signupSlice = createSlice({
    name: "signup",
    initialState: initialState,
    reducers: {},

    //extraReducers 외부 작업을 참조(e.g 비동기 처리)
    extraReducers: {
        //----자유게시판 목록 불러오는 리듀서
        [postSignupList.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [postSignupList.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [postSignupList.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    },
});

export const {} = signupSlice.actions;

export default signupSlice;