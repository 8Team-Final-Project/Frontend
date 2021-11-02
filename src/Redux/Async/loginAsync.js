import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getLoginList = createAsyncThunk(
    "login",
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
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);