import { createSlice } from "@reduxjs/toolkit";
import { getLoginList } from "../Async/loginAsync";

const initialState = {
    list: [],
    isPatching: false,
    errorMessage: null,
};

const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {},

    //extraReducers 외부 작업을 참조(e.g 비동기 처리)
    extraReducers: {
        //----자유게시판 목록 불러오는 리듀서
        [getLoginList.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [getLoginList.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getLoginList.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    },
});

// export const {} = contentSlice.actions;

export default loginSlice;