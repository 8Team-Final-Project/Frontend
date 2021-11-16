import React, {useState} from "react";
import styled from "styled-components";

function Comments(){

  let [title, titles] = useState([]);
  let [text, setText] = useState('');

  return (
    <div>

      <div>
        {/* 댓글창 */}
        <DInput>
          <Input type="text" onChange={(e) => {setText(e.target.value)}} placeholder="욕설은 징계 대상이 될 수 있습니다."/>
        </DInput>

        {/* 저장 버튼 */}
        <SaveButton onClick={() => {
          var arrayCopy = [...title];
          arrayCopy.unshift(text);
          titles( arrayCopy );
        }}>
          저장
        </SaveButton>

      </div>

      <Hr />

      {/* 댓글창 */}
      {title.map((t,i)=>{
          return(
            <CommentBox>
              <Nick>닉네임</Nick>
              <p onClick={()=>{counts(i)}}> {t}</p>
              <EditBtn>수정</EditBtn>
              <DeleteBtn>삭제</DeleteBtn>
              <Hr/>
            </CommentBox>
          )
        })}
      
    </div>
    
  );
}

const DInput = styled.div`
  width: 100%;
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