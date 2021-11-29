import React from "react";
import styled from "styled-components";

//icon
import logoIcon from "../../Asset/icons/logo_icon.svg";

const HoneyButton = ({ value, onClick, main }) => {
  return (
    <HButton onClick={onClick} main={main}>
      {value}
      {main && <img src={logoIcon.src} />}
    </HButton>
  );
};

HoneyButton.defaultProps = {
  value: "",
  onClick: () => {},
  main: false
};

// styled-component
const HButton = styled.button`
  width: 80%;
  height: 80px;
  background-color: #ffd86b;
  padding: 12px 0px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 17px;
  cursor: pointer;
  ${({ main }) => main && `position:relative;`}
  img {
    height: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  /* font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans JP', Medium; */
  color: #3c3c3c;
`;

export default HoneyButton;
