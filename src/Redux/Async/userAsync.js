import { createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../Shared/api";
import router from "next/router";
import Swal from "sweetalert2"

// 미들웨어

// 회원가입
export const postSignup = createAsyncThunk("/user/postSignup", async (data, thunkAPI) => {
  try {
    const response = await userApi.signup(data);
    if (response.data.result === "success") {
      Swal.fire("회원가입 완료", "", "success");
      router.push("/auth/login");
      return response.data.msg;
    }
  } catch (err) {
    Swal.fire("빈칸을 채워주세요!", "", "error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 로그인
export const postLogin = createAsyncThunk("user/postLogin", async (data, thunkAPI) => {
  try {
    const response = await userApi.login(data);
    if (response.data.result === "success") {
      const token = response.data.token;
      Swal.fire("로그인완료", "", "success")
      localStorage.setItem("token", token);
      router.push("/");
      return response.data.msg;
    }
  } catch (err) {
    Swal.fire("이메일 혹은 비밀번호를 다시 확인해 주세요!", "", "error");
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 로그아웃
export const postLogout = createAsyncThunk("user/postLogout", async (data, thunkAPI) => {
  try {
    const response = await userApi.logout(data);
    if (response.data.success === true) {
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
    Swal.fire("프로필 수정 완료!", "", "success");
    if (response.statusText === "OK") {
      return data;
    }
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
