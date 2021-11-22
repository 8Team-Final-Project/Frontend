import { createAsyncThunk } from "@reduxjs/toolkit";
import { tagRankingApi } from "../../Shared/api";

// 꿀조합 게시글리스트 불러오기
export const getTagRankingDB = createAsyncThunk("tagRanking", async (data, thunkAPI) => {
  try {
    const response = await tagRankingApi.getTagRanking(data);
    if (response.statusText === "OK") return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.message);
  }
});
