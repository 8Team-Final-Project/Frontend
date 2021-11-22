import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styled from "styled-components";
// import DetailContentsBox from "./DetailContentsBox";

import { 
  addCommentDB,
  getCommentDB,
  // deleteCommentDB,
  // editCommentDB,
} from "../Redux/Async/commentAsync";


function Comments(){
  const dispatch = useDispatch();

  // const {
  //   query: { id }
  // } = useRouter();

  // React.useEffect(() => {
  //   if (id) dispatch(getCommentDB(id));
  // }, [id]);

  // const deleteComment = () => {
  //   dispatch(deleteCommentDB(id));
  //   Router.push("/");
  // };

  // const comment = useSelector((state) => {
  //   // console.log(state.comment)
  //   return state.comment.comment.newComment})

  const router = useRouter();
  const postId = useRouter().query.id;
  console.log("postId", postId)
  const commentList = useSelector((state) => state.comment.comment)

  const [commentContent, setCommentContent] = useState("")
  
  useEffect(() => {
    if(postId){
      dispatch(getCommentDB(postId));
    }
  }, [postId]);

  //저장 버튼
  const setComments = () => {
    const commentItem = {
      postId: postId,
      commentContent: commentContent,
    };
    dispatch(addCommentDB(commentItem));
  };



  return (
    <Wrap>
      {/* 댓글 입력창 */}
      <Box>
        <DInput>
          <Input type="text" onChange={(e) => {setCommentContent(e.target.value)}} placeholder="댓글을 입력해주세요."/>
        </DInput>

        <DInput2>
          <SaveButton onClick={() => {
            setComments()
          }}>
            작성
          </SaveButton>
        </DInput2>
      </Box>
      
      <Hr/>

      {/* 댓글창 */}
      {
        commentList.map((comment, idx) => {
          return(
            <Box>
                <Container>
                  <H4>{ comment && comment.userNickname }</H4>
                  <P>{ comment && comment.commentContent }</P>
                  <P2>{ comment && comment.createDate }</P2>
                  {/* <button onClick={deleteComment}>삭제</button> */}
                </Container>
            </Box>
          )
        })
      }
    </Wrap>
    
  );
}



const Wrap = styled.div`
  width: 100%;
`

const Box = styled.div`
  padding: 0px 20px;
  display: flex;
`

const DInput = styled.div`
  width: 80%;
`

const DInput2 = styled.div`
  width: 20%;
`
const Input = styled.input`
width: 100%;
margin-top: 10px;
font-size: 18px;
border: none;
`

const SaveButton = styled.button`
width: 100%;
margin-top: 10px;
font-size: 18px;
text-align: right;
`

const Left = styled.button`
text-align: left;
`

const Hr = styled.hr`
  width: 90%;
`

const Container = styled.div`
  text-align: left;
`

const H4 = styled.div`
  margin-right: 5px;
  font-weight: bold;
  font-size: 20px;
`
const P = styled.div`
  font-size: 18px;
`

const P2 = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  color: #d9d9d9;
`

const Nick = styled.div`
  font-weight: bold;
`

const EditBtn = styled.button`
  border: solid 1px;
`

const DeleteBtn = styled.button`
  border: solid 1px;
`


export default Comments;