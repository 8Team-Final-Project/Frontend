import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

//library
import Swal from "sweetalert2";
import Modal from "react-modal";
import { CopyToClipboard } from "react-copy-to-clipboard";

//function
import { getPostDB, likePostDB, savePostDB } from "../Redux/Async/postAsync";

//component
import CommentList from "./CommentList";
import MenuButton from "./Shared/CommentEditDelete";
import Tag from "./Tag";
import LikeEffect from "./Shared/LikeEffect";

//icon
import { BsThreeDotsVertical } from "react-icons/bs";

//img
import likeOn from "../Asset/Images/likeOn.svg";
import likeOff from "../Asset/Images/likeOff.svg";
import saveOn from "../Asset/Images/saveOn.svg";
import saveOff from "../Asset/Images/saveOff.svg";
import shareOn from "../Asset/Images/shareOn.svg";

const DetailContentsBox = (props) => {
  const dispatch = useDispatch();
  const {
    query: { id }
  } = useRouter(); // postID

  const [showLottie, setShowLottie] = useState(false); // 로티
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 controll

  const { src } = props;

  const shareUrl = "kkuljohab.com" + useRouter().asPath;

  const post = useSelector((state) => state.post.post); // 포스트 정보
  const user = useSelector((state) => state.user.user?.userId); // 유저id
  const likeUserId = useSelector((state) => state.post.post?.likeStatus); // 좋아요 표시한 유저 id
  const saveUserId = useSelector((state) => state.post.post?.keepStatus); // 찜하기 누른 유저 id

  //찜하기
  const setPostSave = () => {
    dispatch(savePostDB(id));
  };

  //
  const setPostLike = () => {
    dispatch(likePostDB(id));
    if (likeUserId == false) {
      setShowLottie(true);
      setTimeout(() => {
        setShowLottie(false);
      }, 1000);
    }
  };

  React.useEffect(() => {
    if (id) dispatch(getPostDB(id));
  }, [id]);

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
        {showLottie && <LikeEffect />}
        <FlexBox>
          <Image src={post && post.userImg} />
          <UserBox>
            <NickName>{post && post.userNickname}</NickName>
            <PostingDate>{post && post.createDate}</PostingDate>
          </UserBox>
          {post?.userId === user && (
            <Menu>
              <BsThreeDotsVertical onClick={openModal} />
            </Menu>
          )}
        </FlexBox>
        <PostImg src={post?.postImg1 ? post.postImg1 : src} />
        <Title>
          <strong>{post && post.postTitle}</strong>
        </Title>

        <Content>
          <Label>꿀조합</Label>
          <Value>{post && post.postRecipe}</Value>
        </Content>
        <Content>
          <Label>레시피</Label>
          <Recipe> {post && post.postContent}</Recipe>
        </Content>
        <TagWrap>{post && post.postTag.map((tag, idx) => <Tag is_detail key={idx} value={"#" + tag}></Tag>)}</TagWrap>
        <Btn>
          <IconBox>
            <button
              onClick={() => {
                post?.userId && setPostLike();
              }}
            >
              {likeUserId && likeUserId == true ? <img src={likeOn.src} /> : <img src={likeOff.src} />}
            </button>
            <TextBox>{post && post.likeCnt}</TextBox>
          </IconBox>
          <IconBoxFlex>
            <IconBox>
              <button
                onClick={() => {
                  post?.userId && setPostSave();
                }}
              >
                {saveUserId && saveUserId == true ? <img src={saveOn.src} /> : <img src={saveOff.src} />}
              </button>
            </IconBox>
            <IconBox>
              <CopyToClipboard text={shareUrl}>
                <button
                  onClick={() => {
                    Swal.fire("복사 완료", "링크를 공유해주세요!", "sucess");
                  }}
                >
                  <img src={shareOn.src} />
                </button>
              </CopyToClipboard>
            </IconBox>
          </IconBoxFlex>
        </Btn>

        <CommentList />
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

DetailContentsBox.defaultProps = {
  src: "/defaultImg.svg"
};

// styled-component
const Image = styled.img`
  margin: 0 15px;
  width: 44px;
  height: 44px;
  object-fit: cover;
  border-radius: 30px;
`;

const NickName = styled.div`
  font-size: 16px;
  color: #898a8d;
  text-align: start;
  margin-bottom: 3%;
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

const Grid = styled.div`
  text-align: left;
  position: relative;
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
  background-color: #f8f8f8;
`;

const Title = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: bold;
  word-break: break-all;
  margin: 5px 15px 17px 20px;
  position: relative;
`;

const Menu = styled.div`
  font-size: 20px;
  color: #b8b8b8;
  margin: 0 0 0 auto;
  align-items: center;
  line-height: 2.3;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  width: 95%;
  margin: 10px 20px;
  font-size: 18px;
`;

const Label = styled.span`
  display: inline-block;
  color: #878787;
  width: 70px;
`;

const Value = styled.span`
  display: inline-block;
  color: black;
  text-align: left;
  width: calc(100% - 80px);
  overflow-wrap: break-word;
`;

const Recipe = styled.span`
  display: inline-block;
  color: black;
  text-align: left;
  width: calc(100% - 80px);
  overflow-wrap: break-word;
`;

const TagWrap = styled.div`
  margin: 15% 0 8.5% 0;
  text-align: center;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: #b8b8b8;
  border-top: 0.5px solid #e5e5e5;
  border-bottom: 0.5px solid #e5e5e5;
  padding: 0 5%;
`;

const ModalFrame = styled.div`
  max-width: 400px;
  max-height: 400px;
`;

export default DetailContentsBox;
