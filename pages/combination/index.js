import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationList } from "../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";

import SearchInput from "../../src/Components/Input/SearchInput";
import Card from "../../src/Components/Card";
import FloatingButton from "../../src/Components/Button/FloatingButton";
import FirstEventImg from "../../src/Asset/Images/first-event-bnr.svg";
import FirstEventBanner from "../../src/Asset/Images/firstEventBanner.png";
//꿀조합 페이지
const combination = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const isloaded = useSelector((state) => state.combination.loaded);
  const postList = useSelector((state) => state.combination.list[0]);
  useEffect(() => {
    if (!postList) {
      dispatch(getCombinationList());
    }
  }, [postList]);

  return (
    <div>
      <PageBox>
        <div>
          <SearchInput></SearchInput>
        </div>
        <div>
          <EventBanner src={FirstEventImg.src} />
        </div>
        {/* post는 객체하나 */}
        {isloaded && (
          <>
            {postList &&
              postList.map((post) => {
                return <Card key={post.id} {...post} />;
              })}
          </>
        )}
      </PageBox>
    </div>
  );
};

const EventBanner = styled.img`
  margin-top: 15px;
  width: 100%;
`;

const PageBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

export default combination;
