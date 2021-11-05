import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import router from "next/router";

export default function FloatingButton() {
  return (
    <Box>
      <Floatbtn
        src="/floatbtn.png"
        onClick={() => {
          router.push("/event/write");
        }}
      />
    </Box>
  );
}

const Floatbtn = styled.img`
  position: absolute;
  right: 7%;
  top: 85%;
  width: 17%;
`;
