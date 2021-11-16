import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DetailContentsBox from '../../../src/Components/DetailContentsBox';

//꿀조합 상세페이지
const CombinationDetail = (props) => {
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

export default CombinationDetail;
