import { createSlice } from "@reduxjs/toolkit";
import {
    addCombinationPostDB,
    patchCombinationPostDB,
    getCombinationList,
    deleteCombinationPostDB,
    getCombinationPost,
} from "../Async/combinationAsync";

const initialState = {
    //아직 불러오기 api가 완성되지 않아서 임의로 list 안에 객체 넣어두었습니다. 정상작동하면 빼면 됩니다.
    list: [{}],
    post: null,
};

const combinationSlice = createSlice({
    name: "combination",
    initialState: initialState,
    reducers: {},

    //extraReducers 외부 작업을 참조(e.g 비동기 처리)
    extraReducers: {
        // 꿀조합 게시글 작성
        [addCombinationPostDB.fulfilled]: (state, { payload: post }) => {
            state.list.unshift(post);
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
        [patchCombinationPostDB.fulfilled]: (state, { payload: post }) => {
            state.post = post;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [patchCombinationPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [patchCombinationPostDB.rejected]: (
            state,
            { payload: errorMessage }
        ) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        // 꿀조합 게시글 삭제
        [deleteCombinationPostDB.fulfilled]: (state, { payload: postId }) => {
            state.list.filter(ele => ele.postId !== postId);
            state.isFetching = false;
            state.errorMessage = null;
        },
        [deleteCombinationPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [deleteCombinationPostDB.rejected]: (
            state,
            { payload: errorMessage }
        ) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        // 꿀조합 게시글 전체 리스트 불러오기
        [getCombinationList.fulfilled]: (state, { payload: postList }) => {
            state.list = postList;
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
        // 꿀조합 단일 게시글 불러오기
        [getCombinationPost.fulfilled]: (state, { payload: postList }) => {
            state.post = postList;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [getCombinationPost.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getCombinationPost.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
    },
});

export const {} = combinationSlice.actions;

export default combinationSlice;
