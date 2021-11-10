import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

export default function LogoEffect({ width, height }) {
  const styles = { width, height };
  const ref = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../Asset/lottie/logo_effect.json")
    });
  }, []);
  return (
    <Container {...styles}>
      <Lottie ref={ref} />
    </Container>
  );
}

LogoEffect.defaultProps = {
  width: "100%",
  height: "auto"
};

const Container = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const Lottie = styled.div`
  width: 100%;
  height: 100%;
`;
