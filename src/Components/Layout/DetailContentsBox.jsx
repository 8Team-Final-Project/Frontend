import React, { useState } from "react";
import Modal from "react-modal";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getEventPostDB, deleteEventPostDB, likeEventPostDB, editEventPostDB } from "../../Redux/Async/eventAsync";

//component
import MenuButton from "../Shared/CommentEditDelete";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tag from "../Tag";
import HeartOff from "../../../public/likeOff.png";
import { red } from "@mui/material/colors";

const DetailContentsBox = (props) => {
  const dispatch = useDispatch();

  const {
    query: { id }
  } = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);

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

  const likeEventPost = () => {
    dispatch(likeEventPostDB(id));
  };

  // Open modal
  const openModal = (e) => {
    setModalIsOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <React.Fragment>
      <PostImg src={post && post.postImg} />
      <Title>
        {post && post.postTitle}
        <BsThreeDotsVertical onClick={openModal} style={{ margin: "5px 0px 0px 50px", width: "20px" }} />
      </Title>
      <Intro> {post && post.postSubtitle} </Intro>

      <Wrap>
        <Content>
          <Label>꿀조합</Label>
          <Value>{post && post.postRecipe}</Value>
        </Content>

        <Content>
          <Label>레시피</Label>
          <Value> {post && post.postContent} </Value>
        </Content>
        {post && post.postTag.map((tag, idx) => <Tag is_detail key={idx} value={"#" + tag}></Tag>)}

        {/* <button onClick={editpage}>수정</button>
        <button onClick={deleteEventPost}>삭제</button> */}
      </Wrap>
      <Btn>
        <LikeOffBtn src="/likeOff.png" onClick={likeEventPost} />
        {post && post.likeCnt}
        <SaveBtn src="/saveOff.png" />
      </Btn>

      <ModalFrame>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={props.clearSelectedOption}
          ariaHideApp={false}
          contentLabel="Selected Option"
          className="Modal"
        >
          <div
            style={{
              position: "fixed",
              bottom: 0,
              width: "100%"
            }}
          >
            <MenuButton />
          </div>
        </Modal>
      </ModalFrame>
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
  display: flex;
  justify-content: center;
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

const Content = styled.div`
  display: flex;
  max-width: 100%;
  margin-bottom: 45px;
`;

const Label = styled.span`
  display: inline-block;
  color: #878787;
  text-align: left;
  margin-bottom: 45px;
  width: 70px;
`;

const Value = styled.span`
  color: black;
  text-align: left;
  width: calc(100% - 70px);
  margin-left: 10;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const LikeOffBtn = styled.img`
  width: 30px;
  margin-right: 15px;
`;

const SaveBtn = styled.img`
  width: 20px;
  margin-left: 80px;
`;

const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

export default DetailContentsBox;
