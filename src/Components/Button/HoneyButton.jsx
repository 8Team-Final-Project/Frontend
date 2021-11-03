import React from 'react';
import styled from "styled-components";

const HoneyButton = ({value, onClick}) => {
  return(
      <HButton onClick={onClick}>{value}</HButton>
  )
}

HoneyButton.defaultProps = {
  value: '',
  onClick: ()=>{}
};

const HButton = styled.button`
  width: 100%;
  height: 75px;
  background-color: #FFD86B;
  padding: 12px 0px;
  border-radius: 10px;
  cursor:pointer
`


export default HoneyButton;