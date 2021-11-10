import React, { useState } from "react";
import Modal from "react-modal";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getEventPostDB, likeEventPostDB, saveEventPostDB } from "../../Redux/Async/eventAsync";

//component
import MenuButton from "../Shared/CommentEditDelete";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tag from "../Tag";
import HeartOff from "../../../public/likeOff.png";
import { red } from "@mui/material/colors";

const DetailContentsBox = (props) => {
  const dispatch = useDispatch();

  const { src } = props;

  const {
    query: { id }
  } = useRouter();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const post = useSelector((state) => state.event.post);
  const user = useSelector((state) => state.user.user?.userId);

  const [offSave, setOnSave] = useState(true);

  const saveClick = () => {
    setOnSave(!offSave);
  };

  const setPostSave = () => {
    dispatch(saveEventPostDB(id));
  };

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
      <PostImg src={post?.postImg ? post.postImg : src} />
      <Title>
        <strong>{post && post.postTitle}</strong>
        {post?.userId === user && (
          <Menu>
            <BsThreeDotsVertical onClick={openModal} />
          </Menu>
        )}
      </Title>

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
        <LikeBtn src="/Vector.svg" onClick={likeEventPost} />
        {post && post.likeCnt}
        <SaveBtn
          src="/Save.svg"
          onClick={() => {
            saveClick();
            setPostSave();
          }}
        />
        저장
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

DetailContentsBox.defaultProps = {
  src: "/android-icon-192x192.png"
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
  word-break: break-all;
  margin: 0px 0px 62px 0px;
  position: relative;
`;

const Menu = styled.div`
  display: inline-block;
  line-height: 1;
  font-size: 20px;
  color: #b8b8b8;
  text-align: end;
  cursor: pointer;
  position: absolute;
  right: 0;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  margin-bottom: 15px;
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
  margin-right: 10px;
  cursor: pointer;
`;

const SaveBtn = styled.img`
  width: 20px;
  margin: 0px 10px 0px 50px;
  cursor: pointer;
`;

const ShareBtn = styled.img`
  width: 30px;
  margin: 0px 10px 0px 50px;
`;

const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

export default DetailContentsBox;
