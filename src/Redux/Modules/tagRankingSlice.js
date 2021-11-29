import { createSlice } from "@reduxjs/toolkit";
import { getTagRankingDB, postTagRankingDB } from "../Async/tagRankingAsync";

const initialState = {};

const tagRankingSlice = createSlice({
  name: "tagRankcing",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    // 태그 랭킹 받아오기
    [getTagRankingDB.fulfilled]: (state, { payload }) => {
      state.tagRanking = payload;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [getTagRankingDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [getTagRankingDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    },
    // 태그 랭크 넣어주기
    [postTagRankingDB.fulfilled]: (state, { payload }) => {
      state.tagRanking = payload;
      state.isFetching = false;
      state.errorMessage = null;
    },
    [postTagRankingDB.pending]: (state, { payload }) => {
      state.isFetching = true;
    },
    [postTagRankingDB.rejected]: (state, { payload: errorMessage }) => {
      state.isFetching = false;
      state.errorMessage = errorMessage;
    }
  }
});

export default tagRankingSlice;
