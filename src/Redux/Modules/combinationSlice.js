import { createSlice } from "@reduxjs/toolkit";
import { addCombinationPostDB, patchCombinationPostDB, getCombinationList, deleteCombinationPostDB } from "../Async/combinationAsync";

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
        // 꿀조합 게시글 작성
        [addCombinationPostDB.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [addCombinationPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [addCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        // 꿀조합 게시글 수정
        [patchCombinationPostDB.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [patchCombinationPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [patchCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        // 꿀조합 게시글 삭제
        [deleteCombinationPostDB.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [deleteCombinationPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [deleteCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        // 꿀조합 게시글 불러오기
        [getCombinationList.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [getCombinationList.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getCombinationList.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    },
});

export const {} = combinationSlice.actions;

export default combinationSlice;