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
      animationData: require("../../Asset/lottie/likeEffect.json")
    });
  }, []);
  return (
    <Container>
      <Lottie ref={ref} />
    </Container>
  );
}

const Container = styled.div``;
const Lottie = styled.div``;
