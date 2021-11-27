import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import {
  getCombinationListDB,
  getEventPostListDB,
  addPostDB,
  getPostDB,
  editPostDB,
  deletePostDB,
  likePostDB,
  savePostDB
} from "../Async/postAsync";

const initialState = {
  list: [],
  post: null
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    // 꿀조합 게시글 전체 리스트 불러오기
    [getCombinationListDB.fulfilled]: (state, { payload }) => {
      state.postlist = payload;
      state.loaded = true;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [getCombinationListDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [getCombinationListDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //이벤트 게시글 전체 조회
    [getEventPostListDB.fulfilled]: (state, { payload }) => {
      state.postlist = payload;
      state.loaded = true;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [getEventPostListDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [getEventPostListDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //게시글 추가
    [addPostDB.fulfilled]: (state, { payload }) => {
      state.list.unshift(payload);
      state.errorMessage = null;
    },
    [addPostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [addPostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //이벤트 게시글 조회
    [getPostDB.fulfilled]: (state, { payload }) => {
      state.post = payload;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [getPostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [getPostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //이벤트 게시글 수정
    [editPostDB.fulfilled]: (state, { payload }) => {
      state.post = payload;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [editPostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [editPostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //이벤트 게시글 삭제
    [deletePostDB.fulfilled]: (state, { payload }) => {
      state.post = payload;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [deletePostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [deletePostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },

    //이벤트 게시글 좋아요
    [likePostDB.fulfilled]: (state, { payload: post }) => {
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
    [likePostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [likePostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
      Swal.fire("로그인을 먼저 해주세요", "", "error")
    },

    //이벤트 게시글 찜
    [savePostDB.fulfilled]: (state, { payload: post }) => {
      if (post.msg === "게시물이 찜 되었습니다") {
        state.post.keepStatus = true;
      }
      if (post.msg === "게시물이 찜이 취소 되었습니다") {
        state.post.keepStatus = false;
      }
      state.isFetching = false;
      state.errorMessage = null;
    },
    [savePostDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [savePostDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
      Swal.fire("로그인을 먼저 해주세요" ,"" , "error")
    }
  }
});

export default postSlice;
