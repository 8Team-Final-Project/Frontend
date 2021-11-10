import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import EventPost from "../Event/EventPost";

const PostSaveBtn = (props) => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  //작성글 불러오기
  const post = useSelector((state) => state.user.user?.myPost);

  //저장글 불러오기
  const save = useSelector((state) => state.user.user?.keepPost);

  const tabContArr = [
    {
      tabTitle: (
        <PostButton className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>
          {" "}
          작성한 글{" "}
        </PostButton>
      ),
      tabCont: (
        <>
          {post &&
            post.map((p) => {
              return <EventPost {...p} key={p.id} />;
            })}
        </>
      )
    },
    {
      tabTitle: (
        <SaveButton className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>
          {" "}
          저장한 글{" "}
        </SaveButton>
      ),
      tabCont: (
        <>
          {save &&
            save.map((p) => {
              return <EventPost {...p} key={p.id} />;
            })}
        </>
      )
    }
  ];

  return (
    <>
      <Container>
        <Center>
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </Center>

        <div>{tabContArr[activeIndex].tabCont}</div>
      </Container>
    </>
  );
};

PostSaveBtn.defaultProps = {
  value: "",
  onClick: () => {}
};

const Center = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
`;

const PostButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #b8b8b8;
  cursor: pointer;
  border-bottom: 3px solid inherit;
  &.is-active {
    color: #ff7775;
    border-bottom: 3px solid #ff7775;
  }
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #b8b8b8;
  cursor: pointer;
  border-bottom: 3px solid inherit;
  &.is-active {
    color: #ff7775;
    border-bottom: 3px solid #ff7775;
  }
`;

export default PostSaveBtn;
