import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getEventPostListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay,Navigation} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"

//component
import Card from "../../src/Components/Card";
import FirstEventImg from "../../src/Asset/Images/eventbnr1.svg";
import SecondEventImg from "../../src/Asset/Images/eventbnr2.svg";
import ThirdEventImg from "../../src/Asset/Images/ramenbanner.svg";

SwiperCore.use([Autoplay,Navigation]);


const event = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post);
  const isloaded = useSelector((state) => state.post.loaded);

  // pagniation
  const allPostList = useSelector((state) => state.post?.postlist?.[1]?.countAllpost);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    pagiNation(page);
  };

  const pagiNation = useCallback(
    (page) => {
      dispatch(getEventPostListDB(page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getEventPostListDB(page));
  }, []);

  const goEventInfo = () => {
    return router.push("/event/info");
  };

  return (
    <React.Fragment>
      <EventName>이번주 붕어빵 꿀조합은?</EventName>

      <Swiper
          spaceBetween = {30}
          slidesPerView = {1}
          loop={true}
          autoplay={{
            delay : 4000,
            disableOnInteraction : false
          }}
          // initialSlide = {2}
        >
          <SwiperSlide>
          <BannerImg src={FirstEventImg.src} onClick={goEventInfo} />
          {/* slide1 */}
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg src={SecondEventImg.src} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImg src={ThirdEventImg.src} />
        </SwiperSlide>
      </Swiper>

      <CardWrap>
        {isloaded && (
          <>
            {post_list &&
              post_list?.postlist?.[0].map((p, id) => {
                return <Card {...p} key={id} />;
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
    color : white;
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: white;
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #ffd86b;
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
