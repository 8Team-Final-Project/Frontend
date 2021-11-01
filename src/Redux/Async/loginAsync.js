import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLoginList = createAsyncThunk(
    "login/postList",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://54.180.157.2:8000/api/v1/users/login",data
            );
            console.log(response)
            const token = response.data.token
            console.log(token);
            window.localStorage.setItem("token",token)
            if (response.statusText === "OK") return response.data; 
        } catch (err) {
            Sentry.captureException(`error, 자유게시판목록 로드 : ${err}`);
            Swal.fire("에러", "네트워크 연결 상태를 확인해주세요.!", "error");
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);