import React, { useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getEventPostDB, deleteEventPostDB } from "../../Redux/Async/eventAsync";

const DetailContentsBox = (props) => {
  const dispatch = useDispatch();
  const {
    query: { id }
  } = useRouter();
  const post = useSelector((state) => state.event.post);

  React.useEffect(() => {
    if (id) dispatch(getEventPostDB(id));
  }, [id]);

  const deleteEventPost = () => {
    dispatch(deleteEventPostDB(id));
    Router.push("/event");
  };
  const editpage = () => {
    Router.push(`/event/edit/${id}`);
  };

  return (
    <React.Fragment>
      <PostImg src={post && post.postImg} />
      <Title>{post && post.postTitle}</Title>
      <Intro> 취향 안타는 환상의 조합</Intro>

      <Wrap>
        <Mix>
          꿀조합<span>민초, 붕어빵, 취두부</span>
        </Mix>

        <Recipe>레시피</Recipe>
        <Text> {post && post.postContent} </Text>
        {/* <Text> 붕어빵에서 팥을 빼고 민트초코를 넣어주세요. </Text> */}

        <button onClick={editpage}>수정</button>
        <button onClick={deleteEventPost}>삭제</button>
      </Wrap>
    </React.Fragment>
  );
};

const PostImg = styled.div`
  width: 364px;
  height: 225px;
  margin-bottom: 36px;
  border-radius: 12px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 15px;
`;

const Intro = styled.p`
  color: #b8b8b8;
  font-size: 16px;
  margin-bottom: 62px;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Mix = styled.div`
  display: flex;
  text-align: left;
  color: #878787;
  margin-bottom: 45px;

  & span {
    color: black;
    margin-left: 24px;
  }
`;

const Recipe = styled.p`
  text-align: left;
  color: #878787;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: black;
  text-align: left;
`;

const HeartImg = styled.img``;

export default DetailContentsBox;
