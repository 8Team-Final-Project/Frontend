import { createSlice } from "@reduxjs/toolkit";
import { 
    addCommentDB,
    getCommentDB,
    // editCommentDB,
    deleteCommentDB,
     } from "../Async/commentAsync";



const initialState = {
    comment:[],
    isLogin: false,
};

const commentSlice = createSlice({
    name : "comment",
    initialState : initialState,
    reducers : {},

    extraReducers: {
        //댓글 추가하기
        [addCommentDB.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.errorMessage = null;
            state.isFetching = false;
            state.comment.unshift(payload.newComment);
        },
        [addCommentDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [addCommentDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        // 댓글 불러오기
        [getCommentDB.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.errorMessage = null;
            state.isFetching = false;
            state.comment = payload;
        },
        [getCommentDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getCommentDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        //댓글 수정하기
        // [editCommentDB.fulfilled]: (state, { payload }) => {
        //     state.errorMessage = null;
        //     state.isFetching = false;
        //     state.comment = payload;
        // },
        // [editCommentDB.pending]: (state, { payload }) => {
        //     state.isFetching = true;
        // },
        // [editCommentDB.rejected]: (state, { payload: errorMessage }) => {
        //     state.isFetching = false;
        //     state.errorMessage = errorMessage;
        // },

        //댓글 삭제하기
        [deleteCommentDB.fulfilled]: (state, { payload }) => {
            state.comment = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [deleteCommentDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [deleteCommentDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
      }
    })

    export default commentSlice;