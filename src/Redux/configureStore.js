import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

//모듈 불러오기
// import freeBoardSlice from "./Modules/freeBoardSlice";

//리듀서 전달하기
const reducer = combineReducers({
    // freeBoard: freeBoardSlice.reducer,
});

const middlewares = [];

const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

export const store = configureStore({
    reducer,
    middleware: [...middlewares, ...getDefaultMiddleware()],
    devTools: env !== "production",
});
