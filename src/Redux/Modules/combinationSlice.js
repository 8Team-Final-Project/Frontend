import { createSlice } from "@reduxjs/toolkit";
import { postCombinationList } from "../Async/combinationAsync";

const initialState = {
    postTitle: "",
    postContent: "",
    postImg: "",
    postTag: ""
};

const combinationSlice = createSlice({
    name: "combination",
    initialState: initialState,
    reducers: {},

    //extraReducers 외부 작업을 참조(e.g 비동기 처리)
    extraReducers: {
        //----자유게시판 목록 불러오는 리듀서
        [postCombinationList.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [postCombinationList.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [postCombinationList.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    },
});

export const {} = combinationSlice.actions;

export default combinationSlice;