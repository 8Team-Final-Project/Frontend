import React from "react";
import styled from "styled-components";
import WhiteButton from "../Button/WhiteButton";


//is_post 리턴: 이벤트 페이지 수정 모달
//in_post none 리턴: 댓글 수정 모달
const CommentEditDelete = ({ props, is_post }) => {


  if(is_post) {
    return (
        <>
          <EditButton>이벤트페이지 수정 모달</EditButton>
          <DeleteButton>삭제</DeleteButton>

          <WhiteButton margin="" value="취소" onClick={() => router.push("/auth/login")} />
        </>
      );
    }
    return (
    <>
      <EditButton onClick={editHandler}>댓글 수정 모달</EditButton>
      <DeleteButton onClick={deleteHandler}>삭제</DeleteButton>

      <WhiteButton margin="" value="취소" onClick={() => router.push("/auth/login")} />
    </>
    )
};

CommentEditDelete.defaultProps = {
  value: "",
  onClick: () => {}
};

// 수정 버튼
const EditButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  padding: 12px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 1px;
  cursor: pointer;
`;
// 삭제 버튼
const DeleteButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  padding: 12px 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-bottom: 10px;

  cursor: pointer;
`;

export default CommentEditDelete;
