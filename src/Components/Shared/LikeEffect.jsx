import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

export default function LikeEffect() {
  const ref = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../Asset/lottie/like_effect.json")
    });
  }, []);
  return (
    <Container>
      <Lottie ref={ref} />
    </Container>
  );
}

// styled-component
const Container = styled.div``;

const Lottie = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  z-index: 1000;
`;
