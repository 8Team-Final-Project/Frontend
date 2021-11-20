import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

// components
import Tag from "./Tag";

// img
import likeOn from "../Asset/Images/likeOn.svg";
import likeOff from "../Asset/Images/likeOff.svg";

const Card = (props) => {
  const router = useRouter();

  const { src } = props;

  const goDetail = () => {
    if (props.event1list === true) return router.push(`/event/detail/${props._id}`);
    else return router.push(`/combination/detail/${props._id}`);
  };

  return (
    <CardBox onClick={goDetail}>
      <LeftBox src={props.postImg1 ? props.postImg1 : src} />
      <RightBox>
        <PostTitle>{props.postTitle && props.postTitle}</PostTitle>
        <TagLine>{props.postTag && props.postTag.map((tag, idx) => <Tag key={idx} value={"#" + tag}></Tag>)}</TagLine>
        <Like>
          {props.likeCnt && props.likeCnt == 0 ? <Heart src={likeOff.src} /> : <Heart src={likeOn.src} />}
          <LikeCnt>
            <>{props.likeCnt && props.likeCnt}</>
          </LikeCnt>
        </Like>
      </RightBox>
    </CardBox>
  );
};

Card.defaultProps = {
  src: "/android-icon-192x192.png"
};

const PostTitle = styled.div`
  font-size: 18px;
  margin-bottom: 7px;
  overflow: hidden;
  width: calc(100% - 10px);
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TagLine = styled.div`
  overflow: scroll;
  white-space: nowrap;
  -ms-overflow-style: none;
  height: 35px;
  &::-webkit-scrollbar {
    width: 0 !important;
    display: none;
  }
`;

const CardBox = styled.div`
  border: 1px solid #e5e5e5;
  margin: 15px auto;
  display: flex;
  width: 100%;
  height: 10%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #e5e5e5;
  box-sizing: border-box;
  cursor: pointer;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 30%;
  height: 110px;
  border-radius: 10px 0 0 10px;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

// 제목, 태그, 좋아요 받아오기
const RightBox = styled.div`
  padding: 10px 10px 10px 20px;
  box-sizing: border-box;
  width: 70%;
  height: 100px;
  border-radius: 0 10px 10px 0;
`;

const Like = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Heart = styled.img`
  display: block;
  text-align: right;
  width: 15px;
  height: 13px;
  margin-left: 85%;
  margin-top: 1px;
`;

const LikeCnt = styled.span`
  margin-left: 7px;
  font-size: 10px;
  color: red;
`;

export default Card;
