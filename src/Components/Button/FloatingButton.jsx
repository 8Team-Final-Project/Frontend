import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import router from "next/router";

export default function FloatingButton({ onClick }) {
  return (
    <Box>
      <Floatbtn onClick={onClick} src="/FloatBtn.svg" />
    </Box>
  );
}

FloatingButton.defaultProps = {
  onClick: () => {}
};

const Floatbtn = styled.img`
  position: fixed;
  right: 7%;
  bottom: 5%;
  width: 55px;
  cursor: pointer;
`;
