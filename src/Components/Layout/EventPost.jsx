import React from "react";
import styled from "styled-components";
import router from "next/router";
import Tag from "../Tag";

const EventPost = (props) => {
  return (
    <CardBox
      onClick={() => {
        router.push(`event/detail/${props._id}`);
      }}
    >
      <LeftBox src={props.postImg} />
      <RightBox>
        <PostTitle>{props.postTitle}</PostTitle>
        {props.postTag.map((tag, idx) => (
          <Tag key={idx} value={"#" + tag}></Tag>
        ))}
      </RightBox>
    </CardBox>
  );
};

const PostTitle = styled.div`
  font-size: 16px;
`;

const CardBox = styled.div`
  border: 1px solid #e5e5e5;
  margin: 10px auto;
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #e5e5e5;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 30%;
  height: 100px;
  border-radius: 10px 0 0 10px;
  /* background-color: green; */
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

// 제목, 태그, 좋아요 받아오기
const RightBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 70%;
  height: 100px;
  border-radius: 0 10px 10px 0;
`;

export default EventPost;
