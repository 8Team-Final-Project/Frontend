import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

export default function SplashLogoEffect() {
  const ref = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: ref.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("../../Asset/lottie/splash_logo_effect.json")
    });
  }, []);
  return (
    <Container>
      <Lottie ref={ref} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;
const Lottie = styled.div`
  width: 100%;
  height: 100%;
`;
