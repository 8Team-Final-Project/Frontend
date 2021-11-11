import * as React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import router from "next/router";
import { useSelector } from "react-redux";

export default function FloatingButton({ onClick, locationX }) {
  const is_login = useSelector((state) => state.user.isLogin);

  return (
    <React.Fragment>
      {is_login && (
        <Box>
          <Floatbtn onClick={onClick} locationX={locationX && locationX} src="/FloatBtn.svg" />
        </Box>
      )}
    </React.Fragment>
  );
}

FloatingButton.defaultProps = {
  onClick: () => {}
};

const Floatbtn = styled.img`
  position: fixed;
  right: ${({ locationX }) => locationX && `calc(103vw - ${locationX}px);`};
  bottom: 5%;
  width: 55px;
  cursor: pointer;
`;
