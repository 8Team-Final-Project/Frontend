import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styled from "styled-components";

import {
  addCommentDB,
  getCommentDB,
  deleteCommentDB
  // editCommentDB,
} from "../Redux/Async/commentAsync";

function Comments() {
  const dispatch = useDispatch();

  const router = useRouter();
  const postId = useRouter().query.id;

  const commentList = useSelector((state) => state.comment.comment);

  const user = useSelector((state) => state.user.user?.userId);

  const [commentContent, setCommentContent] = useState("");

  // 댓글 불러오기
  useEffect(() => {
    if (postId) {
      dispatch(getCommentDB(postId));
    }
  }, [postId]);

  // 댓글 저장
  const setComments = () => {
    const commentItem = {
      postId: postId,
      commentContent: commentContent
    };
    dispatch(addCommentDB(commentItem));
  };

  return (
    <Wrap>
      {/* 댓글 입력창 */}
      <Box>
        <DInput>
          <Input
            type="text"
            onChange={(e) => {
              setCommentContent(e.target.value);
            }}
            placeholder="댓글을 입력해주세요."
          />
        </DInput>

        <DInput2>
          <SaveButton
            onClick={() => {
              setComments();
            }}
          >
            작성
          </SaveButton>
        </DInput2>
      </Box>

      <Hr />

      {/* 댓글창 */}
      {commentList &&
        commentList.map((comment, idx) => {
          // 댓글 삭제
          const deleteComment = () => {
            dispatch(deleteCommentDB(comment._id));
            // router.push(`/combination/detail/${postId}`);
          };

          return (
            <div>
              <Box>
                <Container>
                  <H4>{comment && comment.userNickname}</H4>
                </Container>
                <Container>
                  <P2>{comment && comment.createDate}</P2>
                </Container>
              </Box>
              <Box2>
                <P>{comment && comment.commentContent}</P>
                {comment.userId === user && (
                  <P>
                    <button onClick={deleteComment}>삭제</button>
                  </P>
                )}
              </Box2>
            </div>
          );
        })}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
`;

const Box = styled.div`
  padding: 0px 20px;
  display: flex;
`;

const Box2 = styled.div`
  padding: 0px 20px;
  display: flex;
  text-align: left;
  margin-bottom: 15px;
`;

const DInput = styled.div`
  width: 80%;
`;

const DInput2 = styled.div`
  width: 20%;
`;
const Input = styled.input`
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  border: none;
`;

const SaveButton = styled.button`
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  text-align: right;
`;

const Left = styled.button`
  text-align: left;
`;

const Hr = styled.hr`
  width: 90%;
`;

const Container = styled.div`
  text-align: left;
`;

const H4 = styled.div`
  margin-right: 10px;
  font-size: 20px;
  color: #878787;
`;
const P = styled.div`
  font-size: 18px;
  color: #3c3c3c;
`;

const P2 = styled.div`
  font-size: 15px;
  color: #b8b8b8;
`;

const Nick = styled.div`
  font-weight: bold;
`;

const EditBtn = styled.button`
  border: solid 1px;
`;

const DeleteBtn = styled.button`
  border: solid 1px;
`;

export default Comments;
