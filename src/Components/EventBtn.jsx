import React from "react"
import styled from "styled-components"
import router from "next/router"

const EventBtn = (props)=> {
  return (
    <NowEventBtn
    onClick={()=> {router.push("/event")}}
    >+ 지난이벤트</NowEventBtn>
    // 이벤트 페이지를 다르게 보여주기
  )
}

const NowEventBtn = styled.button`
  font-weight: bold;
  padding: 5px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #FFFFFF;
`;

export default EventBtn