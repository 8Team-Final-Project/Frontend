import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

//material
import Box from "@mui/material/Box";

export default function FloatingButton({ onClick, locationX }) {
  //로그인 체크
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

// styled-component
const Floatbtn = styled.img`
  position: fixed;
  right: ${({ locationX }) => locationX && `calc(104vw - ${locationX}px);`};
  bottom: 140px;
  width: 76px;
  cursor: pointer;
`;
