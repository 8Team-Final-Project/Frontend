import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Tag = ({ value }) => {
  // 검색 기능에서 input 값을 가져와서 뿌려준다.
  // useState로 값을 받아오기
  // const SearchTag = useSelector((state) => state.list)

  return <TagBox>{value}</TagBox>;
};

const TagBox = styled.div`
  background-color: #ffffff;
  display: inline-block;
  font-size: 12px;
  color: #3c3c3c;
  padding: 2px 5px;
  width: auto;
  height: 27.41px;
  border-radius: 74px;
  border: 0.74px solid #d9d9d9;
  box-sizing: border-box;
`;

export default Tag;
