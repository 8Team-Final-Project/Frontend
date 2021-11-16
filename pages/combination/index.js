import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";

import SearchInput from "../../src/Components/Input/SearchInput";
import Card from "../../src/Components/Card";
import FirstEventImg from "../../src/Asset/Images/first-event-bnr.svg";

//꿀조합 페이지
const combination = () => {
  const router = useRouter();

  const dispatch = useDispatch();
  const isloaded = useSelector((state) => state.post.loaded);
  const postList = useSelector((state) => state.post?.list[0]);
  useEffect(() => {
    if (!postList) {
      dispatch(getCombinationListDB());
    }
  }, [postList]);

  return (
    <div>
      <PageBox>
        <SearchWrap>
          <SearchInput></SearchInput>
          </SearchWrap>
        <div>
          <EventBanner src={FirstEventImg.src} />
        </div>
        <CardWrap>
        {/* post는 객체하나 */}
        {isloaded && (
          <>
            {postList &&
              postList.map((post) => {
                return <Card key={post.id} {...post} />;
              })}
          </>
        )}
        </CardWrap>
      </PageBox>
    </div>
  );
};

const SearchWrap = styled.div`
  padding : 5%;
`

const EventBanner = styled.img`
  margin-top: 2%;
  width: 100%;
`;

const PageBox = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
`;

const CardWrap = styled.div`
  margin : 8% 6% auto;
`

export default combination;
