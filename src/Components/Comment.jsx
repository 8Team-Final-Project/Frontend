import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { deleteCommentDB, getCommentDB } from "../Redux/Async/commentAsync";

const Comment = (props) => {
  const dispatch = useDispatch();
  const deleteComment = () => {
    dispatch(deleteCommentDB(props._id));
  };

  const user = useSelector((state) => state.user.user?.userId);

  useEffect(() => {
    if (props.postId) {
      dispatch(getCommentDB(props.postId));
    }
  }, [props.postId]);

  return (
    <Container>
      <NicBox>
        {/* 닉네임, 날짜 */}
        <NicBox2>
          <Nickname>{props.userNickname && props.userNickname}</Nickname>
          <Date>{props.createDate && props.createDate}</Date>
        </NicBox2>

        {/* 삭제 버튼 */}
        <DeleteBox>
          {props.userId === user && (
            <X>
              <Xbutton onClick={deleteComment}>✕</Xbutton>
            </X>
          )}
        </DeleteBox>
      </NicBox>

      {/* 댓글박스 */}
      <CommentBox>
        <P>{props.commentContent && props.commentContent}</P>
      </CommentBox>
    </Container>
  );
};

const Container = styled.div`
  text-align: left;
  margin: 0 25px;
`;

const P = styled.div`
  font-size: 18px;
  color: #3c3c3c;
`;

const X = styled.div`
  font-size: 18px;
  color: #b8b8b8;
`;

const Xbutton = styled.div`
  font-size: 18px;
  color: #b8b8b8;
`;

const Nickname = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #878787;
`;

const Date = styled.div`
  font-size: 15px;
  color: #b8b8b8;
  padding-top: 4px;
`;

const NicBox = styled.div`
  display: flex;
`;

const NicBox2 = styled.div`
  display: flex;
  width: 100%;
`;

const DeleteBox = styled.div`
  width: 16px;
  color: #b8b8b8;
`;

const CommentBox = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  color: #3c3c3c;
`;

export default Comment;
