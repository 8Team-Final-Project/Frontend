import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentApi } from "../../Shared/api";

// 댓글 추가하기
export const addCommentDB = createAsyncThunk("addComment", async (data, thunkAPI) => {
  try {
    console.log(data)
    const response = await commentApi.addComment(data);
    console.log(response)
    if (response.statusText === "Created"){
      window.alert("댓글추가 완료!");
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 댓글 불러오기
export const getCommentDB = createAsyncThunk("getComment", async (data, thunkAPI) => {
  try {
    const response = await commentApi.getComment(data);
    // console.log(response)
    if (response.statusText === "OK"){
      window.alert("댓글불러오기 완료!");
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});


// 댓글 수정하기
export const editCommentDB = createAsyncThunk("editComment", async (data, thunkAPI) => {
  try {
    const response = await commentApi.editComment(data);
    console.log(response)
    if (response.statusText === "OK"){
      window.alert("댓글불러오기 완료!");
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 댓글 삭제하기
// export const deleteCommentDB = createAsyncThunk("deleteComment", async (data, thunkAPI) => {
//   try {
//     const response = await commentApi.deleteComment(data);
//     if (response.statausText === "OK") return response.data.newPost;
//   } catch (err) {
//     return thunkAPI.rejectWithValue(err.response.message);
//   }
// });
