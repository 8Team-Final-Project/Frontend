import React from "react";
import styled from "styled-components";

//꿀조합 작성페이지
const write = () => {
    return (
        <div>
            <WriteBox>
                <h1>꿀조합작성페이지</h1>
                <CenterBox>
                     <h2>제목</h2>
                    <WriteInput></WriteInput>
                </CenterBox>
                <CenterBox>
                    <input type="file" />
                    <div>10MB이하로 업로드 할 수 있어~</div>
                </CenterBox>
                <CenterBox>
                    <h2>내용</h2>
                    <WriteInput
                    style={{
                        height: "200px",
                        type: "text",
                    }}/>
                </CenterBox>
                <CenterBox>
                    <h2>해시태그</h2>
                    <WriteInput
                    placeholder="태그입력해"
                   />
                   <FlexBox>
                      <div>태그1</div> <div>태그2</div>
                   </FlexBox>
                </CenterBox>
                <CenterBox>
                    <button>취소하기</button>
                    <button>저장하기</button>
                </CenterBox>
            </WriteBox>
        </div>
    );
};
const CenterBox = styled.div`
    width: 350px;
    margin: 10px auto;
`;

const WriteBox = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid black;
    margin: auto;
`;

const WriteInput = styled.input`
    width: 350px;
`;

const FlexBox =styled.div`
display: flex;
`;

export default write;
