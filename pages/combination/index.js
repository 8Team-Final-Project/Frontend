import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay,Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


import SearchInput from "../../src/Components/Input/SearchInput";
import Card from "../../src/Components/Card";
import FirstEventImg from "../../src/Asset/Images/eventbnr1.svg";
import SecondEventImg from "../../src/Asset/Images/eventbnr2.svg";


SwiperCore.use([Autoplay,Navigation]);


//꿀조합 페이지
const combination = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isloaded = useSelector((state) => state.post.loaded);
  const postList = useSelector((state) => state.post?.postlist?.[0]);

  // pagniation
  const allPostList = useSelector((state) => state.post?.postlist?.[1]?.countAllpost);

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
    dispatch(getCombinationListDB(page));
  }, []);

  const goEventInfo = () => {
    return router.push("/event/info");
  };

  return (
    <div>
      <PageBox>
        <SearchWrap>
          <SearchInput />
        </SearchWrap>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay : 4000,
            disableOnInteraction : false
          }}
          // initialSlide = {2}
        >
          <SwiperSlide>
            <EventBanner src={FirstEventImg.src} onClick={goEventInfo} />
            {/* slide1 */}
          </SwiperSlide>
          <SwiperSlide>
            <EventBanner src={SecondEventImg.src} />
          </SwiperSlide>
        </Swiper>
        <CardWrap>
          {/* post는 객체하나 */}
          {isloaded && (
            <>
              {postList &&
                postList?.map((post, id) => {
                  return <Card {...post} key={id} />;
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
    margin: 15px 0px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    // border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    // border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    // border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #3c3c3c;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    background-color: #ffd86b;
    border-radius: 20px;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: #ffd86b;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #ffd86b;
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
