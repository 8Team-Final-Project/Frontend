import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import styled from "styled-components";

import { 
  addCommentDB,
  getCommentDB
} from "../Redux/Async/commentAsync";



function Comments(){
  const dispatch = useDispatch();
  const a = useSelector((state) => state.comment.comment[0])
  console.log(a)

  

  const router = useRouter();
  const postId = useRouter().query;
  console.log(postId)

  const [textContent, setTextContent] = useState("")
  
  useEffect(() => {
    dispatch(getCommentDB(postId));
  }, []);

  //저장 버튼
  const setComments = () => {
    const commentItem = {
      postId: postId,
      textContent: textContent,
    };
    dispatch(addCommentDB(commentItem));
  };

  return (
    <div>

      <div>
        {/* 댓글 입력창 */}
        <DInput>
          <Input type="text" onChange={(e) => {setTextContent(e.target.value)}} placeholder="댓글을 입력해주세요."/>

          <SaveButton onClick={() => {
            setComments()
          }}>
            저장
          </SaveButton>
        </DInput>
      </div>


      {/* 댓글창 */}
      {/* {a.map((t,i)=>{
          return(
            <CommentBox>
              <Nick>닉네임</Nick>
              <p>{ t }</p>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
              <Hr/>
            </CommentBox>
          )
        })} */}
      
    </div>
    
  );
}

const DInput = styled.div`
  display: flex;
  border: none;
  height:20px;
`
const Input = styled.input`
  width: 90%;
  height:20px;
`

const Hr = styled.hr`
  width: 100%;
`

const CommentBox = styled.div`
  text-align: left;
  margin: 20px;
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

const SaveButton = styled.button`
  margin: 10px 0px 0px 20px;
`

export default Comments;