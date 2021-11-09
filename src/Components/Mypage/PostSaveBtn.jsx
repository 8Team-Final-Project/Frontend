import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import EventPost from "../Layout/EventPost";

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
        <Tab>
          <PostButton className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>
            {" "}
            작성한 글{" "}
          </PostButton>
        </Tab>
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
        <Tab>
          <SaveButton className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>
            {" "}
            저장한 글{" "}
          </SaveButton>
        </Tab>
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
        <div>
          {tabContArr.map((section, index) => {
            return section.tabTitle;
          })}
        </div>

        <div>{tabContArr[activeIndex].tabCont}</div>
      </Container>
    </>
  );
};

PostSaveBtn.defaultProps = {
  value: "",
  onClick: () => {}
};

const Tab = styled.div`
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
`;

const PostButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #ff7775;
  cursor: pointer;
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #ff7775;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ff7775;
  /* display: none; */
`;

export default PostSaveBtn;
