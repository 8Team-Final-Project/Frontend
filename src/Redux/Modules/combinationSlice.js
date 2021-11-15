// import { createSlice } from "@reduxjs/toolkit";
// import {
//   addCombinationPostDB,
//   patchCombinationPostDB,
//   getCombinationList,
//   deleteCombinationPostDB,
//   getCombinationPost,
//   patchCombinationPostLike,
//   patchCombinationPostSave
// } from "../Async/postAsync";

// const initialState = {
//   list: [],
//   post: null
// };

// const combinationSlice = createSlice({
//   name: "combination",
//   initialState: initialState,
//   reducers: {},

//   //extraReducers 외부 작업을 참조(e.g 비동기 처리)
//   extraReducers: {
//     // 꿀조합 게시글 작성
//     [addCombinationPostDB.fulfilled]: (state, { payload: post }) => {
//       state.list[0].unshift(post);
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [addCombinationPostDB.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [addCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },
//     // 꿀조합 게시글 수정
//     [patchCombinationPostDB.fulfilled]: (state, { payload: post }) => {
//       state.post = post;
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [patchCombinationPostDB.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [patchCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },
//     // 꿀조합 게시글 삭제
//     [deleteCombinationPostDB.fulfilled]: (state, { payload: postId }) => {
//       state.list.filter((ele) => ele.postId !== postId);
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [deleteCombinationPostDB.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [deleteCombinationPostDB.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },
//     // 꿀조합 게시글 전체 리스트 불러오기
//     [getCombinationList.fulfilled]: (state, { payload: postList }) => {
//       state.list = postList;
//       state.loaded = true;
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [getCombinationList.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [getCombinationList.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },
//     // 꿀조합 단일 게시글 불러오기
//     [getCombinationPost.fulfilled]: (state, { payload: postList }) => {
//       state.post = postList;
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [getCombinationPost.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [getCombinationPost.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },
//     // 꿀조합 좋아요 / 취소
//     [patchCombinationPostLike.fulfilled]: (state, { payload: post }) => {
//       window.alert(post.msg);
//       if (post.msg === "좋아요성공") {
//         state.post.likeCnt += 1;
//         state.post.likeStatus = true;
//       }
//       if (post.msg === "취소성공") {
//         state.post.likeCnt -= 1;
//         state.post.likeStatus = false;
//       }
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [patchCombinationPostLike.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [patchCombinationPostLike.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     },

//     // 꿀조합 게시물 찜 /취소
//     [patchCombinationPostSave.fulfilled]: (state, { payload: post }) => {
//       window.alert(post.msg);
//       if (post.msg === "게시물이 찜 되었습니다") {
//         state.post.keepStatus = true;
//       }
//       if (post.msg === "게시물이 찜이 취소 되었습니다") {
//         state.post.keepStatus = false;
//       }
//       state.isFetching = false;
//       state.errorMessage = null;
//     },
//     [patchCombinationPostSave.pending]: (state, { payload }) => {
//       state.isFetching = true;
//     },
//     [patchCombinationPostSave.rejected]: (state, { payload: errorMessage }) => {
//       state.isFetching = false;
//       state.errorMessage = errorMessage;
//     }
//   }
// });

// export const {} = combinationSlice.actions;

// export default combinationSlice;
