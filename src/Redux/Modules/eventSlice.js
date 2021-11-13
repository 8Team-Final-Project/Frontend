import { createSlice } from "@reduxjs/toolkit";
import { 
    eventPostListDB, 
    infinityPostListDB,
    addEventPostDB, 
    getEventPostDB, 
    editEventPostDB, 
    deleteEventPostDB, 
    likeEventPostDB,
    saveEventPostDB
     } from "../Async/eventAsync";



const initialState = {
    list:[{}],
    post:null
};

const eventSlice = createSlice({
    name : "event",
    initialState : initialState,
    reducers : {
        increaseLike: (state, action) => {
            state.post.likeCnt += 1;
            state.post.likeState = true;
        },
        decreaseLike: (state, action) => {
            state.post.likeCnt -= 1;
            state.post.likeState = false;
        },
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
        [getEventPostDB.fulfilled]: (state, { payload } ) => {
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
        [editEventPostDB.fulfilled]: (state, {payload}) => {
            state.post = payload;
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

        //이벤트 게시글 좋아요
        [likeEventPostDB.fulfilled]: (state, { payload : post }) => {
            window.alert(post.msg);
            if (post.msg === "좋아요성공") {
                state.post.likeCnt += 1;
                state.post.likeStatus = true;
            }
            if (post.msg === "취소성공") {
                state.post.likeCnt -= 1;
                state.post.likeStatus = false;
            }
            state.loaded = true;
            state.isFetching = false;
            state.errorMessage = null;
        },
        [likeEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [likeEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },

        //이벤트 게시글 찜
        [saveEventPostDB.fulfilled]: (state, { payload : post }) => {
            window.alert(post.msg);
                if (post.msg === "게시물이 찜 되었습니다") {
                    state.post.keepStatus = true;
                }
                if (post.msg === "게시물이 찜이 취소 되었습니다") {
                    state.post.keepStatus = false;
                }
            state.isFetching = false;
            state.errorMessage = null;
        },
        [saveEventPostDB.pending]: (state, { payload }) => {
            state.isFetching = true;
        },
        [saveEventPostDB.rejected]: (state, { payload: errorMessage }) => {
            state.isFetching = false;
            state.errorMessage = errorMessage;
        },
        
    }   
})

export default eventSlice;