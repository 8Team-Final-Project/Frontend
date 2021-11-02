import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { combineReducers } from "redux";

//모듈 불러오기

import combinationSlice  from "./Modules/combinationSlice";
import eventSlice from "./Modules/eventSlice";
import userSlice from "./Modules/userSlice";


//리듀서 전달하기
const reducer = combineReducers({
    combination: combinationSlice.reducer,
    event : eventSlice.reducer,
    user : userSlice.reducer,
});

//미들웨어에 redux-logger 넣기!
const env = process.env.NODE_ENV;
const middlewares = [];
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
}

//스토어 완성!
export const store = () =>
    configureStore({
        reducer,
        middleware: [...middlewares, ...getDefaultMiddleware()],
        devTools: env !== "production",
    });

//createWrapper 함수를 통해 스토어를 바인딩해주고 withRedux로 _app.js를 감싸주면 next.js에서 redux-store 연결 끝~!
export const wrapper = createWrapper(store, {
    debug: process.env.NODE_ENV !== "production",
});
