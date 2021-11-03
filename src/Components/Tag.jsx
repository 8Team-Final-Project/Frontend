import React from "react"
import styled from "styled-components"
import { useSelector } from "react-redux"

const Tag = ({value})=> {
  // 검색 기능에서 input 값을 가져와서 뿌려준다.
  // useState로 값을 받아오기
  // const SearchTag = useSelector((state) => state.list)

  return (
    <TagBox>
      {value}
    </TagBox>
  )
}

const TagBox = styled.div`
  background-color: #ffffff;
  display: inline-block;
  padding: 5px;
  width: auto;
  height: 20px;
  border-radius: 20px;
  border: 1px solid black;
`;


export default Tag