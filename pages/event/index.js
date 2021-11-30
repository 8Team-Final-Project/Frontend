import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

//library
import Pagination from "react-js-pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay, Navigation]); // Autoplay : 자동 슬라이드, Navigation : 방향 표시

//function
import { getEventPostListDB } from "../../src/Redux/Async/postAsync";

//component
import Card from "../../src/Components/Card";
import FirstEventImg from "../../src/Asset/Images/eventbnr1.svg";
import SecondEventImg from "../../src/Asset/Images/eventbnr2.svg";
import ThirdEventImg from "../../src/Asset/Images/eventbnr3.svg";

const event = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const post_list = useSelector((state) => state.post); // 게시물전체
  const isloaded = useSelector((state) => state.post.loaded); // map오류 해결용
  const allPostList = useSelector((state) => state.post?.postlist?.[1]?.countAllpost); // 게시물 총 갯수

  // 페이지 변경
  const handlePageChange = (page) => {
    setPage(page);
    pagiNation(page);
  };

  // 설명필요함
  const pagiNation = useCallback(
    (page) => {
      dispatch(getEventPostListDB(page));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(getEventPostListDB(page));
  }, []);

  // 이벤트 안내페이지로 가기
  const goEventInfo = () => {
    return router.push("/event/info");
  };

  return (
    <React.Fragment>
      <EventName>이번주 라면 꿀조합은?</EventName>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
      >
        <SwiperSlide>
          <BannerImg src={FirstEventImg.src} onClick={goEventInfo} />
        </SwiperSlide>
        <SwiperSlide>
          <a target="_blank" href="https://wpub6shfa65.typeform.com/to/rhCKtx33">
            <BannerImg src={SecondEventImg.src} />
          </a>
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

// styled-component
const StylePagination = styled.div`
  > .pagination {
    display: flex;
    justify-content: center;
    padding: 5px 15px 35px 15px;
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
    color: white;
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
  cursor: pointer;
`;

const CardWrap = styled.div`
  margin: 8% 6% auto;
`;

export default event;
