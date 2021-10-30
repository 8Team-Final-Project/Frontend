import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getLoginList = createAsyncThunk(
    "login",
    async (data, thunkAPI) => {
        // const token = res.data.data.token;
        // localStorage.setItem("token", token);
        try {
            const response = await axios.post(
                "http://54.180.157.2:8000/api/v1/users/login", data
            );
            console.log(response)
            
            if (response.statusText === "OK") {
                const token = response.data.token;
                localStorage.setItem("token", token);
                return response.data;
            
            }

        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.message);
        }
    }
);