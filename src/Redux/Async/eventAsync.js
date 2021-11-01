import { createAsyncThunk } from "@reduxjs/toolkit";
import { eventPostApi } from "../../Shared/api";

// 미들웨어
// 이벤트게시물 리스트 전체 불러오기
export const eventPostListDB = createAsyncThunk(
    "event/getPostList",
    async (data, thunkAPI) => {
        try {
            const response = await eventPostApi.getEventList(data);
            if(response.data.ok) {return response.data};
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);

// 이벤트 게시물 추가하기
export const addEventPostDB = createAsyncThunk(
    "event/addPost",
    async (data, thunkAPI) => {
        try {
            const response = await eventPostApi.addEventPost(data);
            if(response.data.ok) return response.data.result;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
)

//이벤트 게시물 가져오기 
export const getEventPostDB = createAsyncThunk(
    "event/getPost",
    async (data, thunkAPI) => {
        try{
            const response = await eventPostApi.getEventPost(data);
            if(response.data.ok) return response.data;
        }
        catch (err){
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
    
)

//이벤트 게시물 수정하기 
export const editEventPostDB = createAsyncThunk(
    "event/editPost",
    async (data, thunkAPI) => {
        try {
            const response = await eventPostApi.editEventPost(data);
            if(response.data.ok) return response.data;
        }
        catch (err){
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
)

//이벤트 게시물 삭제하기
export const deleteEventPostDB = createAsyncThunk(
    "event/deletePost",
    async (data, thunkAPI) => {
        try {
            const response = await eventPostApi.deleteEventPost(data);
            if(response.data.ok) return response.data;
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
)
