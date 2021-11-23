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

  const onChangeInput = e => {
    setCommentContent(e.target.value);
  };
  
  const onReset = () => {
    setCommentContent("");
  };

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
            onChange={onChangeInput}
            placeholder="댓글을 입력해주세요."
          />
        </DInput>
        <DInput2>
          <SaveButton
            onClick={() => {
              setComments();
            }}
            onChange={() => {
              onReset()
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
            <Container>
              <NicBox>
                {/* 닉네임, 날짜 */}
                <NicBox2>
                  <Nickname>{comment && comment.userNickname}</Nickname>
                  <Date>{comment && comment.createDate}</Date>
                </NicBox2>

                {/* 삭제 버튼 */}
                <DeleteBox>
                {comment.userId === user && (
                  <X>
                    <Xbutton onClick={deleteComment}>✕</Xbutton>
                  </X>
                )}
                </DeleteBox>
              </NicBox>
              
              {/* 댓글박스 */}
              <CommentBox>
                <P>{comment && comment.commentContent}</P>
              </CommentBox>
            </Container>
          );
        })}
    </Wrap>
  );
}


const Wrap = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const Box = styled.div`
  padding: 0px 20px;
  display: flex;
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
  color: #878787;
`;

const SaveButton = styled.button`
  width: 100%;
  margin-top: 10px;
  font-size: 18px;
  text-align: right;
  color: #878787;
`;

const Hr = styled.hr`
  width: 90%;
  margin-bottom: 30px;
`;

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

export default Comments;