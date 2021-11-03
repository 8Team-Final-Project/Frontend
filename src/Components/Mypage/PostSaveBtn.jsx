import React from "react";
import styled from "styled-components";

const PostSaveBtn = ({value, onClick}) => {

  function handleTitleClick() {
    
  }


  return(
    <>
      <div style={{
        display: "flex",
        width: "100%"
      }}>
        <div>
          <PostButton clickMyPostBtn={() => {}}>작성한 글</PostButton>
          <LeftLine />
        </div>
      
        <div>
          <SaveButton clickSavePostBtn={() => {}}>저장한 글</SaveButton>
          <LeftLine />
        </div>
      </div>
    </>
  )
}

PostSaveBtn.defaultProps = {
  value: '',
  onClick: ()=>{}
};

const PostButton = styled.button`
  width: 180px;
  padding: 12px 0px;
  color: #FF7775;
  cursor: pointer;
`

const SaveButton = styled.button`
  width: 180px;
  padding: 12px 0px;
  color: #FF7775;
  cursor: pointer;
`

const LeftLine = styled.div`
  width: 180px;
  height: 3px;
  background-color: #FF7775;
  /* display: none; */
`


export default PostSaveBtn;