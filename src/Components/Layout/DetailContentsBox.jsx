import React, { useState } from "react";
import Modal from "react-modal";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { FaRegHeart } from "react-icons/fa";
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

  const modalStyles = {
    content: {
      position: "fixed",
      bottom: 0,
      width: "100%"
    }
  };

  return (
    <React.Fragment>
      <PostImg src={post && post.postImg} />
      <Title>
        <strong>{post && post.postTitle}</strong>
        <Menu>
          <BsThreeDotsVertical onClick={openModal} />
        </Menu>
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
      </Wrap>
      <Btn>
        <LikeBtn src="/Vector.svg" />
        {post && post.likeCnt}
        <SaveBtn src="/Save.svg" />
      </Btn>

      <ModalFrame>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={props.clearSelectedOption}
          ariaHideApp={false}
          contentLabel="Selected Option"
          className="Modal"
          style={modalStyles}
        >
          <MenuButton handleExit={closeModal} />
        </Modal>
      </ModalFrame>
    </React.Fragment>
  );
};

const PostImg = styled.img`
  width: 100%;
  height: 225px;
  margin-bottom: 36px;
  margin-top: 31px;
  border-radius: 12px;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  margin: 15px;
`;

const Menu = styled.div`
  margin: 5px 0px 0px 50px;
  font-size: 20px;
  color: #b8b8b8;
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
  width: 100%;
  margin-bottom: 45px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Label = styled.span`
  display: inline-block;
  color: #878787;
  text-align: left;
  margin-bottom: 45px;
  width: 70px;
`;

const Value = styled.span`
  display: inline-block;
  color: black;
  text-align: left;
  width: calc(100% - 80px);
  overflow-wrap: break-word;
`;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  color: #b8b8b8;
`;

const LikeBtn = styled.img`
  width: 30px;
  margin-right: 11px;
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
