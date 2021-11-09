import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  deleteCombinationPostDB,
  getCombinationPost,
  patchCombinationPostLike,
  patchCombinationPostSave
} from "../../../src/Redux/Async/combinationAsync";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "react-modal";

import MenuButton from "../../../src/Components/Shared/CommentEditDelete";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tag from "../../../src/Components/Tag.jsx";

//꿀조합 상세페이지
const PartyDetail = (props) => {
  const dispatch = useDispatch();

  const shareUrl = "kkuljohab.com" + useRouter().asPath;

  const postId = useRouter().query.id;
  const postItem = useSelector((state) => state.combination.post);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const shareUrl = window.location.href;

  const [offLike, setOnLike] = useState(true);
  const [offSave, setOnSave] = useState(true);

  React.useEffect(() => {
    if (postId) dispatch(getCombinationPost(postId));
  }, []);

  const likeClick = () => {
    setOnLike(!offLike);
  };

  const saveClick = () => {
    setOnSave(!offSave);
  };

  useEffect(() => {
    dispatch(getCombinationPost(postId));
  }, []);

  const setDelete = () => {
    dispatch(deleteCombinationPostDB(postId));
  };

  const setPostSave = () => {
    dispatch(patchCombinationPostSave(postId));
  };

  const setPostLike = () => {
    dispatch(patchCombinationPostLike(postId));
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
      <PostImg src={postItem && postItem.postImg} />
      <FlexBox>
        <Title>
          <strong>{postItem && postItem.postTitle}</strong>
          <Menu>
            <BsThreeDotsVertical onClick={openModal} />
          </Menu>
        </Title>
      </FlexBox>
      <Wrap>
        <Content>
          <Label>꿀조합</Label>
          <Value>{postItem && postItem.postRecipe}</Value>
        </Content>
        <Content>
          <Label>레시피</Label>
          <Value> {postItem && postItem.postContent} </Value>
        </Content>
        {postItem && postItem.postTag.map((tag, idx) => <Tag is_detail key={idx} value={"#" + tag}></Tag>)}
      </Wrap>
      <Btn>
        <IconBox>
          <button
            onClick={() => {
              setPostLike();
              likeClick();
            }}
          >
            {offLike && offLike ? <img src="/likeOn.svg" /> : <img src="/likeOff.svg" />}
          </button>
          <TextBox>{postItem && postItem.likeCnt}</TextBox>
        </IconBox>
        <IconBox>
          <button
            onClick={() => {
              saveClick();
              setPostSave();
            }}
          >
            {offSave && offSave ? <img src="/saveOn.svg" /> : <img src="/saveOff.svg" />}
          </button>
          <TextBox>저장</TextBox>
        </IconBox>
        <IconBox>
          <CopyToClipboard text={shareUrl}>
            <button
              onClick={() => {
                window.alert("링크복사됨~");
              }}
            >
              <img src="/shareBtn.svg" />
            </button>
          </CopyToClipboard>
          <TextBox>공유</TextBox>
        </IconBox>
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
const TextBox = styled.div`
  color: #b8b8b8;
  width: auto;
  line-height: 45px;
  font-size: 18px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 10px;
`;

const PostImg = styled.img`
  width: 100%;
  height: 225px;
  margin-bottom: 36px;
  margin-top: 31px;
  border-radius: 12px;
  object-fit: cover;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
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
  font-size: 18px;
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

export default PartyDetail;
