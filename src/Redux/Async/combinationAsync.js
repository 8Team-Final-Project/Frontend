import { createAsyncThunk } from "@reduxjs/toolkit";
import { combinationPostApi } from "../../Shared/api";

// 게시글 작성하기
export const addCombinationPostDB = createAsyncThunk(
    "combination/addPost",
    async (data, thunkAPI) => {
        try {
            const response = await combinationPostApi.postCombinationPost(data);
            if (response.statusText === "OK") return response.data.newPost;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 게시글 수정하기
export const patchCombinationPostDB = createAsyncThunk(
    "combination/patchPost",
    async (data, thunkAPI) => {
        try {
            const response = await combinationPostApi.patchCombinationPost(
                data
            );
            console.log(response);
            if (response.statusText === "OK") return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 게시글 삭제하기
export const deleteCombinationPostDB = createAsyncThunk(
    "combination/deletePost",
    async (data, thunkAPI) => {
        try {
            const response = await combinationPostApi.deleteCombinationPost(
                data
            );
            console.log(response);
            if (response.statusText === "OK") return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 게시글 불러오기
export const getCombinationList = createAsyncThunk(
    "combination/getList",
    async (data, thunkAPI) => {
        try {
            const response = await combinationPostApi.getCombinationList(data);
            console.log(response);
            if (response.statusText === "OK") return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 단일 게시글 불러오기
export const getCombinationPost = createAsyncThunk(
    "combination/getList",
    async (data, thunkAPI) => {
        try {
            const response = await combinationPostApi.getCombinationPost(data);
            console.log(response);
            if (response.statusText === "OK") return response.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);
