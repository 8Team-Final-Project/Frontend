import React from "react";
import styled from "styled-components";

//파티수정페이지
const PartyEdit = () => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>포스트 수정</h1>
            제목
            <input/>
            <br/>
            <br/>
            사진첨부?
            <br/>
            <br/>
            내용
            <input/>
            <br/>
            <br/>
            해시태그
            <input/><button>추가하기</button>
            <br/>
            <br/>

            <Button>취소</Button>
            <button>저장</button>

        </div>
    );
};

const Button = styled.button`
    background-color : red;
`


export default PartyEdit;
