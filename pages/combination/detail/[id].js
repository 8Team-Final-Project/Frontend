import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteCombinationPostDB, getCombinationPost } from "../../../src/Redux/Async/combinationAsync";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

//꿀조합 상세페이지
const PartyDetail = () => {
  const dispatch = useDispatch();

  const postId = useRouter().query.id;

  const postItem = useSelector((state) => state.combination.post);

  useEffect(() => {
    dispatch(getCombinationPost(postId));
  }, []);

  const setDelete = () => {
    dispatch(deleteCombinationPostDB(postId));
  };

  return (
    <div>
      <DetailBox>
        <MainImg>{postItem && postItem.postImg}</MainImg>
        <CenterBox>
          <h3>{postItem && postItem.postTitle}</h3>
        </CenterBox>
        <CenterBox>
          <FlexCenter>
            <div>{postItem && "#" + postItem.postTag}</div>
            <div></div>
          </FlexCenter>
        </CenterBox>
        <CenterBox>
          <DetailContent>{postItem && postItem.postContent}</DetailContent>
        </CenterBox>
        <CenterBox>
          <button>즐겨찾기</button>
        </CenterBox>
        <CenterBox>
          <button>좋아요!</button>
        </CenterBox>
        <CenterBox>
          <button
            onClick={() => {
              router.push(`/combination/edit/${postId}`);
            }}
          >
            수정하기
          </button>
          <button
            onClick={() => {
              setDelete();
              {
                router.push("/combination");
              }
            }}
          >
            삭제하기
          </button>
        </CenterBox>
      </DetailBox>
    </div>
  );
};
const FlexCenter = styled.div`
  display: flex;
`;

const CenterBox = styled.div`
  width: 350px;
  margin: 10px auto;
`;

const DetailBox = styled.div`
  width: 400px;
  height: 700px;
  border: 1px solid black;
  margin: auto;
`;

const MainImg = styled.div`
  width: 350px;
  height: 200px;
  background-color: gray;
  margin: 10px auto;
`;

const DetailContent = styled.div`
  width: 350px;
  height: 150px;
  border: 1px solid black;
`;

export default PartyDetail;
