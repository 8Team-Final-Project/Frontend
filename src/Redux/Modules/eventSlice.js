import { createSlice } from "@reduxjs/toolkit";
import { eventPostListDB, addEventPostDB, getEventPostDB, editEventPostDB, deleteEventPostDB } from "../Async/eventAsync";

const initialState = {
    list:[{}],

};

const eventSlice = createSlice({
    name : "event",
    initialState : initialState,
    reducers : {
    },

    extraReducers: {
        //이벤트 게시글 전체 조회
        [eventPostListDB.fulfilled]: (state, { payload }) => {
            state.postlist = payload;
            state.loaded = true;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [eventPostListDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [eventPostListDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        //이벤트 게시글 추가 
        [addEventPostDB.fulfilled]: (state, { payload }) => {
            console.log(payload);
            state.list.unshift(payload);
            state.errorMessage = null;
        },
        [addEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [addEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        
        //이벤트 게시글 조회
        [getEventPostDB.fulfilled]: (state, { payload }) => {
            state.post = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [getEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [getEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        
        //이벤트 게시글 수정 
        [editEventPostDB.fulfilled]: (state, { payload }) => {
            state.list = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [editEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [editEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        
        //이벤트 게시글 삭제
        [deleteEventPostDB.fulfilled]: (state, { payload }) => {
            state.post = payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [deleteEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [deleteEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        
    }   
})

export default eventSlice;