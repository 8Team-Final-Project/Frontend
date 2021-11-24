import { createAsyncThunk } from "@reduxjs/toolkit";
import { postApi } from "../../Shared/api";
import { useRouter } from "next/router";

const router = useRouter();

// 꿀조합 게시글리스트 불러오기
export const getCombinationListDB = createAsyncThunk("combination/getList", async (data, thunkAPI) => {
  try {
    const response = await postApi.getPostList(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 이벤트 게시글 리스트 불러오기
export const getEventPostListDB = createAsyncThunk("event/getList", async (data, thunkAPI) => {
  try {
    const response = await postApi.getEventPostList(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시글 추가하기
export const addPostDB = createAsyncThunk("addPost", async (data, thunkAPI) => {
  try {
    const response = await postApi.addPost(data);
    if (response.statusText === "OK") return response.data.newPost;
  } catch (err) {
    router.replace("/error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시물 상세페이지 가져오기
export const getPostDB = createAsyncThunk("getPost", async (data, thunkAPI) => {
  try {
    const response = await postApi.getPost(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    router.replace("/error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시글 수정하기
export const editPostDB = createAsyncThunk("editPost", async (data, thunkAPI) => {
  try {
    const response = await postApi.editPost(data);
    if (response.data.success) return response.data;
  } catch (err) {
    router.replace("/error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시글 삭제하기
export const deletePostDB = createAsyncThunk("deletePost", async (data, thunkAPI) => {
  try {
    const response = await postApi.deletePost(data);
    if (response.statusText === "OK") {
      alert("게시물이 삭제되었습니다");
      return response.data.postId;
    }
  } catch (err) {
    router.replace("/error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시물 좋아요
export const likePostDB = createAsyncThunk("likePost", async (data, thunkAPI) => {
  try {
    const response = await postApi.likePost(data);

    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 게시물 찜
export const savePostDB = createAsyncThunk("savePost", async (data, thunkAPI) => {
  try {
    const response = await postApi.savePost(data);
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
