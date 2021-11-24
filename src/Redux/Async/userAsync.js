import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../Shared/api";

// 미들웨어

// 회원가입
export const postSignup = createAsyncThunk("/user/postSignup", async (data, thunkAPI) => {
  try {
    const response = await userApi.signup(data);
    if (response.data.result === "success") {
      window.alert("회원가입 완료");
      router.push("/auth/login");
      return response.data.msg;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 로그인
export const postLogin = createAsyncThunk("user/postLogin", async (data, thunkAPI) => {
  try {
    const response = await userApi.login(data);
    if (response.data.result === "success") {
      const token = response.data.token;
      window.alert("로그인 완료!");
      localStorage.setItem("token", token);
      router.push("/");
      return response.data.msg;
    }
  } catch (err) {
    alert("로그인을 다시 시도해 주세요!");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 로그아웃
export const postLogout = createAsyncThunk("user/postLogout", async (data, thunkAPI) => {
  try {
    const response = await userApi.logout(data);
    if (response.data.success === true) {
      window.alert("로그아웃 완료");
      localStorage.removeItem("token");
      router.push("/");
      return response.data.msg;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 로그인체크 && 프로필
export const Me = createAsyncThunk("user/profile", async (data, thunkAPI) => {
  try {
    const response = await userApi.me(data);
    if (response.statusText === "OK") {
      return response.data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 프로필 수정
export const patchUserid = createAsyncThunk("/user/patchuserid", async (data, thunkAPI) => {
  try {
    const response = await userApi.userid(data);
    window.alert("프로필 수정 완료!");
    if (response.statusText === "OK") {
      return data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
