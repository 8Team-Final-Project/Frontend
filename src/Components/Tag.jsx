import React from "react";
import styled from "styled-components";

// 검색 기능에서 input 값을 가져와서 뿌려준다.
// useState로 값을 받아오기
// const SearchTag = useSelector((state) => state.list)
const Tag = (props) => {
  const { value, is_detail } = props;

  if (is_detail) {
    return <RedTagBox>{value}</RedTagBox>;
  }

  return <BlackTagBox>{value}</BlackTagBox>;
};

// styled-component
const RedTagBox = styled.div`
  background-color: #ffffff;
  display: inline-block;
  font-size: 16px;
  color: #ff7775;
  padding: 5px 10px 0.01px;
  width: auto;
  height: 27.41px;
  border-radius: 74px;
  border: 2px solid #ff7775;
  margin: 5px;
`;

const BlackTagBox = styled.div`
  background-color: #ffffff;
  display: inline-block;
  font-size: 12px;
  color: #3c3c3c;
  padding: 10px;
  width: auto;
  height: 27px;
  line-height: 5px;
  border-radius: 50px;
  border: 0.74px solid #d9d9d9;
  margin: 0px 4px 5px 4px;
  box-sizing: border-box;
`;

export default Tag;
