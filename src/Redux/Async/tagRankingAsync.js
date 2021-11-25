import { createAsyncThunk } from "@reduxjs/toolkit";
import { tagRankingApi } from "../../Shared/api";

// 태그 랭킹 불러오기
export const getTagRankingDB = createAsyncThunk("tagRanking", async (data, thunkAPI) => {
  try {
    const response = await tagRankingApi.getTagRanking(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

// 태그 랭킹 넣어주기
export const postTagRankingDB = createAsyncThunk("postTagRank", async (data, thunkAPI) => {
  try {
    const response = await tagRankingApi.postTagRanking(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
