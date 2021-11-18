import { createSlice } from "@reduxjs/toolkit";
import { 
    addCommentDB,
    getCommentDB,
    // editCommentDB,
    // getPostDBdeleteCommentDB,
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
            state.errorMessage = null;
            state.isFetching = false;
            state.comment = payload;
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
        // [editCommentDB.fulfilled]: (state, {payload}) => {
        //     state.comment = payload;
        //     state.isFetching = false;
        //     state.errorMessage = null;
        // },
        // [editCommentDB.pending]: (state, { payload }) => {
        //     state.isFetching = true;
        // },
        // [editCommentDB.rejected]: (state, { payload: errorMessage }) => {
        //     state.isFetching = false;
        //     state.errorMessage = errorMessage;
        // },

        //댓글 삭제하기
        // [getPostDBdeleteCommentDB.fulfilled]: (state, { payload }) => {
        //     state.comment = payload;
        //     state.isFetching = false;
        //     state.errorMessage = null;
        // },
        // [getPostDBdeleteCommentDB.pending]: (state, { payload }) => {
        //     state.isFetching = true;
        // },
        // [getPostDBdeleteCommentDB.rejected]: (state, { payload: errorMessage }) => {
        //     state.isFetching = false;
        //     state.errorMessage = errorMessage;
        // },

      }
    })

    export default commentSlice;