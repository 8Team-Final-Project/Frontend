import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { getEventPostDB, deleteEventPostDB } from "../../../src/Redux/Async/eventAsync";

import DetailContentsBox from '../../../src/Components/Event/DetailContentsBox';

//이벤트상세페이지
const EventDetail = (props) => {
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
