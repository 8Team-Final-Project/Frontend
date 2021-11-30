import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";

//library
import Swal from "sweetalert2";

//function
import { addCommentDB, getCommentDB } from "../Redux/Async/commentAsync";

//component
import Comment from "./Comment";

function Comments() {
  const dispatch = useDispatch();
  const postId = useRouter().query.id;

  // is_login : 로그인 확인
  // commentList : 댓글 전체
  const is_login = useSelector((state) => state.user.isLogin);
  const commentList = useSelector((state) => state.comment.comment);

  const [commentContent, setCommentContent] = useState("");

  const onChangeInput = (e) => {
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

    if (commentContent === "") {
      Swal.fire("댓글을 입력해주세요", "", "error");
    } else {
      onReset();
      dispatch(addCommentDB(commentItem));
      setCommentContent("");
    }
  };

  return (
    <Wrap>
      {/* 댓글 입력창 */}
      {is_login && (
        <>
          <Box>
            <DInput>
              <Input type="text" onChange={onChangeInput} placeholder="댓글을 입력해주세요." value={commentContent} />
            </DInput>
            <DInput2>
              <SaveButton onClick={setComments}>작성</SaveButton>
            </DInput2>
          </Box>
          <Hr />
        </>
      )}
      {commentList &&
        commentList.map((comment, idx) => {
          return <Comment {...comment} key={idx} />;
        })}
    </Wrap>
  );
}

// styled-component
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

export default Comments;
