import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { getEventPostDB, deleteEventPostDB } from "../../../src/Redux/Async/eventAsync";

import DetailContentsBox from '../../../src/Components/Layout/DetailContentsBox';

//이벤트상세페이지
const EventDetail = (props) => {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event.post)
    console.log(event);


    React.useEffect(() => {
        const response = { postId : "617fb1abf8ae35e2ceb3180f" };
        dispatch(getEventPostDB(response));
    }, [])
    
    return (
        <React.Fragment>
        <Wrap>
            <DetailContentsBox/>
        </Wrap>
        </React.Fragment>
    );
};

const Wrap = styled.div`
    text-align : center;
` 



export default EventDetail;
