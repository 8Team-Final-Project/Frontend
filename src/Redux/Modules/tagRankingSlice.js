import { createSlice } from "@reduxjs/toolkit";
import { tagRankingApi } from "../../Shared/api";
import { getTagRankingDB } from "../Async/tagRankingAsync";

const initialState = {};

const tagRankingSlice = createSlice({
  name: "tagRankcing",
  initialState: initialState,
  reducers: {},

  extraReducers: {
    // 태그 랭킹
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
    }
  }
});

export default tagRankingSlice;
