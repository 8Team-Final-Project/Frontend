import { createAsyncThunk } from "@reduxjs/toolkit";
import { eventPostApi } from "../../Shared/api";

// 미들웨어
// 이벤트게시물 리스트 전체 불러오기
export const eventPostListDB = createAsyncThunk(
    "event/getPostList",
    async (data, thunkAPI) => {
        try {
            const response = await eventPostApi.getEventPostList(data);
            console.log(response)
            if(response.statusText==='OK') {return response.data};
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
            console.log(response)
            if(response.data.success) return response.data.newPost;
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
            console.log(response);
            if(response.statusText==='OK') return response.data;
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
            if(response.data.success) return response.data;
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
            if(response.statusText === "OK") {
                alert("게시물이 삭제되었습니다.");
                return response.data.postId}
        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
)
