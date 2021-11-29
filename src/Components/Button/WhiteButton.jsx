// WhiteButton
import React from "react";
import styled from "styled-components";

const WhiteButton = ({ value, onClick }) => {
  return <WButton onClick={onClick}>{value}</WButton>;
};

WhiteButton.defaultProps = {
  value: "",
  onClick: () => {}
};

// styled-component
const WButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #f8f8f8;
  padding: 12px 0px;
  border-radius: 10px;
  color: #868686;
  font-size: 15px;
  cursor: pointer;
`;

export default WhiteButton;
