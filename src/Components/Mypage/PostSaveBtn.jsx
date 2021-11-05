import React, { useState } from "react";
import styled from "styled-components";

const PostSaveBtn = ({value, onClick}) => {

  function handleTitleClick() {
    
  }


const h1 = document.querySelector("div.hello:first-child h1");


  return(
    <>
      <Container>
        <div>
          <PostButton clickMyPostBtn={() => {}}>작성한 글</PostButton>
          <Line />
        </div>
      
        <div>
          <SaveButton clickSavePostBtn={() => {}}>저장한 글</SaveButton>
          <Line />
        </div>
      </Container>
    </>
  )
}

PostSaveBtn.defaultProps = {
  value: '',
  onClick: ()=>{}
};

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const PostButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  color: #FF7775;
  cursor: pointer;
`

const SaveButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  color: #FF7775;
  cursor: pointer;
`

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #FF7775;
  /* display: none; */
`


export default PostSaveBtn;