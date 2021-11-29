import React from "react";
import styled from "styled-components";
import mask from "../../Asset/Images/main_event_btn.svg";
import info from "../../Asset/Images/goeventrbtn.svg";

const RedButton = ({ main, value, onClick, info }) => {
  return (
    <RButton onClick={onClick} main={main} info={info}>
      {value}
      {main && <img src={mask.src} />}
      {info && <img src={mask.src} />}
    </RButton>
  );
};

RedButton.defaultProps = {
  value: "",
  onClick: () => {},
  main: false,
  info: false
};

const RButton = styled.button`
  width: 100%;
  height: 70px;
  background-color: #ff7775;
  padding: 12px 0px;
  border-radius: 15px;
  color: white;
  font-size: 18px;
  font-weight: medium;
  cursor: pointer;
  ${({ main }) => main && `position:relative;`};
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;

export default RedButton;
