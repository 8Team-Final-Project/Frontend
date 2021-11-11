import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationList } from "../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";

import SearchInput from "../../src/Components/Input/SearchInput";
import Card from "../../src/Components/Card";
import FloatingButton from "../../src/Components/Button/FloatingButton";

//꿀조합 페이지
const combination = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const isloaded = useSelector((state) => state.combination.loaded);
  const postList = useSelector((state) => state.combination.list[0]);
  useEffect(() => {
    dispatch(getCombinationList(postList));
  }, []);



  return (
    <div>
      <PageBox>
        <div>
          <SearchInput></SearchInput>
        </div>
        {/* post는 객체하나 */}
        {postList && postList.map((postlist) => <Card key={postlist._id} {...postlist} />)}
      </PageBox>
    </div>
  );
};

const Info = styled.div`
  margin-top: 10px;
`;

const FlexBox = styled.div`
  display: flex;
`;
const PageBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

export default combination;
