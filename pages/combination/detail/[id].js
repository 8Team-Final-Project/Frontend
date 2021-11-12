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

// components
import MenuButton from "../../../src/Components/Shared/ModalEditDelete";
import { BsThreeDotsVertical } from "react-icons/bs";
import Tag from "../../../src/Components/Tag.jsx";
import PostBasicProfile from "../../../src/Asset/Images/post-basic-profile.svg";

// img
import likeOn from "../../../src/Asset/Images/likeOn.svg";
import likeOff from "../../../src/Asset/Images/likeOff.svg";
import saveOn from "../../../src/Asset/Images/saveOn.svg";
import saveOff from "../../../src/Asset/Images/saveOff.svg";
import shareOn from "../../../src/Asset/Images/shareOn.svg";

//꿀조합 상세페이지
const PartyDetail = (props) => {
  const dispatch = useDispatch();

  const { src } = props;

  const shareUrl = "kkuljohab.com" + useRouter().asPath;

  const postId = useRouter().query.id;
  const postItem = useSelector((state) => state.combination.post);

  const userId = useSelector((state) => state.user.user?.userId);

  const likeUserId = useSelector((state) => state.combination.post?.likeStatus);
  const saveUserId = useSelector((state) => state.combination.post?.keepStatus);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (postId) dispatch(getCombinationPost(postId));
  }, [postId]);

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
      <Grid>
        <FlexBox>
          <Image src={PostBasicProfile.src} />
          <UserBox>
            <NickName>{postItem && postItem.userNickname}</NickName>
            <PostingDate>{postItem && postItem.createDate}</PostingDate>
          </UserBox>
          {postItem?.userId === userId && (
            <Menu>
              <BsThreeDotsVertical onClick={openModal} />
            </Menu>
          )}
        </FlexBox>
        <PostImg src={postItem?.postImg ? postItem.postImg : src} />
        <Title>
          <strong>{postItem && postItem.postTitle}</strong>
        </Title>

        <Content>
          <Label>꿀조합</Label>
          <Value>{postItem && postItem.postRecipe}</Value>
        </Content>
        <Content>
          <Label>레시피</Label>
          <Recipe> {postItem && postItem.postContent}</Recipe>
        </Content>
        <IconBox>
          {postItem && postItem.postTag.map((tag, idx) => <Tag is_detail key={idx} value={"#" + tag}></Tag>)}
        </IconBox>
        <Btn>
          <IconBox>
            <button
              onClick={() => {
                setPostLike();
              }}
            >
              {likeUserId && likeUserId == true ? <img src={likeOn.src} /> : <img src={likeOff.src} />}
            </button>
            <TextBox>{postItem && postItem.likeCnt}</TextBox>
          </IconBox>
          <IconBoxFlex>
            <IconBox>
              <button
                onClick={() => {
                  setPostSave();
                }}
              >
                {saveUserId && saveUserId == true ? <img src={saveOn.src} /> : <img src={saveOff.src} />}
              </button>
            </IconBox>
            <IconBox>
              <CopyToClipboard text={shareUrl}>
                <button
                  onClick={() => {
                    window.alert("링크복사됨~");
                  }}
                >
                  <img src={shareOn.src} />
                </button>
              </CopyToClipboard>
            </IconBox>
          </IconBoxFlex>
        </Btn>
      </Grid>

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
PartyDetail.defaultProps = {};

const Image = styled.img`
  margin-right: 10px;
  width: 44px;
  height: 44px;
  object-fit: none;
  border-radius: 30px;
`;

const NickName = styled.div`
  font-size: 16px;
  color: #898a8d;
  text-align: start;
`;

const PostingDate = styled.div`
  font-size: 12px;
  color: #b8b8b8;
`;

const FlexBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  padding-top: 15px;
  border-top: 0.5px solid #e5e5e5;
`;

const UserBox = styled.div`
  display: table-column;
`;

PartyDetail.defaultProps = {
  src: "/android-icon-192x192.png"
};

const Grid = styled.div`
  text-align: center;
`;

const TextBox = styled.div`
  color: #b8b8b8;
  width: auto;
  line-height: 45px;
  font-size: 18px;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBoxFlex = styled.div`
  display: flex;
  margin: 0 0 0 auto;
`;

const PostImg = styled.img`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  object-fit: cover;
`;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  word-break: break-all;
  margin: 5px 15px 17px;
  position: relative;
`;

const Menu = styled.div`
  font-size: 20px;
  color: #b8b8b8;
  margin: 0 0 0 auto;
  align-items: center;
  line-height: 2.3;
`;

const Content = styled.div`
  display: flex;
  width: 95%;
  margin: 10px;
  font-size: 18px;
`;

const Label = styled.span`
  display: inline-block;
  color: #878787;
  width: 70px;
`;

const Value = styled.span`
  display: inline-block;
  width: 100%;
  padding-left: 10px;
  text-align: start;
`;

const Recipe = styled.span`
  display: inline-block;
  width: 100%;
  height: 5vh;
  padding-left: 10px;
  text-align: start;
  word-wrap: break-word;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #b8b8b8;
  border-top: 0.5px solid #e5e5e5;
  border-bottom: 0.5px solid #e5e5e5;
`;

const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

export default PartyDetail;
