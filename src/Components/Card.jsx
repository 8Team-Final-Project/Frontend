import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { getCombinationList } from "../Redux/Async/combinationAsync";
import { combinationPostApi } from "../Shared/api";

import Tag from "./Tag.jsx";
import { flexbox } from "@mui/system";
import { dividerClasses } from "@mui/material";

const Card = (props) => {

  const router = useRouter();
  return (
    <CardBox
      onClick={() => {
        router.push(`combination/detail/${props._id}`);
      }}
    >
      <LeftBox src={props.postImg} />
      <RightBox>
        <PostTitle>{props && props.postTitle}</PostTitle>
        {props.postTag.map((tag, idx) => (
          <Tag key={idx} value={"#" + tag}></Tag>
        ))}
        <Like>
          <Heart src="/fullheart.png" />
          <LikeCnt>
            <>{props.likeCnt}</>
          </LikeCnt>
        </Like>
      </RightBox>
    </CardBox>
  );
};

const PostTitle = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
`;

const CardBox = styled.div`
  border: 1px solid #e5e5e5;
  margin: 15px auto;
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #e5e5e5;
  box-sizing: border-box;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 30%;
  height: 100px;
  border-radius: 10px 0 0 10px;
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

const Like = styled.div`
  display: flex;
`;

const Heart = styled.img`
  display: block;
  text-align: right;
  width: 15px;
  height: 13px;
  margin-left: 85%;
`;

const LikeCnt = styled.span`
  margin-left: 7px;
  font-size: 10px;
  color: red;
`;

export default Card;
