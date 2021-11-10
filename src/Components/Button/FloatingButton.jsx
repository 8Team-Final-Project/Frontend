import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import router from "next/router";

export default function FloatingButton({ onClick, locationX }) {
  console.log(locationX);
  return (
    <Box>
      <Floatbtn onClick={onClick} locationX={locationX && locationX} src="/FloatBtn.svg" />
    </Box>
  );
}

FloatingButton.defaultProps = {
  onClick: () => {}
};

const Floatbtn = styled.img`
  position: fixed;
  right: ${({ locationX }) => locationX && `calc(100vw - ${locationX}px);`};
  bottom: 5%;
  width: 55px;
  cursor: pointer;
`;
