import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getEventPostListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";

//component
import Card from "../../src/Components/Card";

const event = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post);
  const isloaded = useSelector((state) => state.post.loaded);

  // pagniation
  const allPostList = useSelector((state) => state.post?.list[1]?.countAllpost);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    pagiNation(page);
  };

  const pagiNation = useCallback(
    (page) => {
      dispatch(getCombinationListDB(page));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!post_list) {
      dispatch(getEventPostListDB());
    }
  }, [post_list]);

  const goEventInfo = () => {
    return router.push("/event/info");
  };

  return (
    <React.Fragment>
      <EventName>이번주 붕어빵 꿀조합은?</EventName>
      <WrapBanner>
        <BannerImg src="/eventbanner.svg" onClick={goEventInfo} />
      </WrapBanner>

      <CardWrap>
        {isloaded && (
          <>
            {post_list &&
              post_list?.postlist[0].map((p) => {
                return <Card {...p} key={p.id} />;
              })}
          </>
        )}
      </CardWrap>
      <StylePagination>
        <Pagination
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={allPostList}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </StylePagination>
    </React.Fragment>
  );
};

const StylePagination = styled.div`
  > .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #337ab7;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #337ab7;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: blue;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
`;

const EventName = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 33px;
  margin-bottom: 16px;
`;

const WrapBanner = styled.div`
  width: 100%;
  position: relative;
`;

const BannerImg = styled.img`
  width: 100%;
`;
const CardWrap = styled.div`
  margin: 8% 6% auto;
`;

export default event;
