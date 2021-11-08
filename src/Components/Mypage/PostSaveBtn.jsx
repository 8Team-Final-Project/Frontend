import React, { useState } from "react";
import styled from "styled-components";

const PostSaveBtn = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }

  const tabContArr=[
    {
        tabTitle:(
            <PostButton className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 작성한 글 </PostButton>
        ),
        tabCont:(
            <div> 작성한 글 내용 </div>
        )
    },
    {
        tabTitle:(
            <SaveButton className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 저장한 글 </SaveButton>
        ),
        tabCont:(
            <div> 저장한 글 내용 </div>
        )
    }
];



  return (
    <>
      <Container>
        <div>
        {
          tabContArr.map((section, index)=>{
            return section.tabTitle
          })
        }
        </div>

        <div>
          { tabContArr[activeIndex].tabCont }
        </div>
      </Container>
    </>
  );
};

PostSaveBtn.defaultProps = {
  value: "",
  onClick: () => {}
};

const Container = styled.div`
  width: 100%;
`;

const PostButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #ff7775;
  cursor: pointer;
`;

const SaveButton = styled.button`
  width: 100px;
  padding: 12px 0px;
  font-size: 15px;
  color: #ff7775;
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ff7775;
  /* display: none; */
`;

export default PostSaveBtn;
