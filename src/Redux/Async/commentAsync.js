import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentApi } from "../../Shared/api";
import { useRouter } from "next/router";

// 댓글 추가하기
export const addCommentDB = createAsyncThunk("addComment", async (data, thunkAPI) => {
  try {
    const response = await commentApi.addComment(data);
    if (response.statusText === "OK") {
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
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 댓글 삭제하기
export const deleteCommentDB = createAsyncThunk("deleteComment", async (data, thunkAPI) => {
  try {
    const response = await commentApi.deleteComment(data);

    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
