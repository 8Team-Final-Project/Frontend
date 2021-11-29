import React from "react";
import styled from "styled-components";

//componenet
import DetailContentsBox from '../../../src/Components/DetailContentsBox';

//이벤트상세페이지
const EventDetail = () => {
    return (
        <React.Fragment>
        <Wrap>
            <DetailContentsBox/>
        </Wrap>
        </React.Fragment>
    );
};

//styled-component
const Wrap = styled.div`
    text-align : center;
` 


export default EventDetail;
