import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import Pagination from "react-js-pagination";

import SearchInput from "../../src/Components/Input/SearchInput";
import Card from "../../src/Components/Card";
import FirstEventImg from "../../src/Asset/Images/eventbnr1.svg";

//꿀조합 페이지
const combination = (props) => {
  const dispatch = useDispatch();
  const isloaded = useSelector((state) => state.post.loaded);
  const postList = useSelector((state) => state.post?.list[0]);

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
    if (!postList) {
      dispatch(getCombinationListDB(page));
    }
  }, [postList]);

  return (
    <div>
      <PageBox>
        <SearchWrap>
          <SearchInput />
        </SearchWrap>
        <div>
          <EventBanner src={FirstEventImg.src} />
        </div>
        <CardWrap>
          {/* post는 객체하나 */}
          {isloaded && (
            <>
              {postList &&
                postList?.map((post, id) => {
                  return <Card key={id} {...post} />;
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
      </PageBox>
    </div>
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

const SearchWrap = styled.div`
  padding: 5%;
`;

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
  margin: 8% 6% auto;
`;

export default combination;
