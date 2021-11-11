import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

//components
import RedButton from "../Button/RedButton";
import WhiteButton from "../Button/WhiteButton";
import HoneyButton from "../Button/HoneyButton";

//pwa 다운로드 버튼입니다.
export default function AppDownloadBtn() {
  const [btnOn, setBtnOn] = useState(false);
  let deferredPrompt = useRef(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
    });

    //설치가 되어있다면 버튼은 숨긴다
    if (!deferredPrompt.current) {
      setBtnOn(false);
    }
    //버튼을 보여줌
    setBtnOn(true);
  }, []);

  const installApp = () => {
    if (!deferredPrompt.current) return false;

    //홈화면의 추가를 실행시킨다
    deferredPrompt.current.prompt();

    //실행 후 유저가 설치를 했는지 안했는지를 알 수 있다
    deferredPrompt.current.userChoice.then((choiceResult) => {
      //설치 했을 때
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
        setIsBtnOn(false);
      } else {
        //설치 하지 않았을 때
        console.log("User dismissed the A2HS prompt");
      }
    });
  };

  return <>{btnOn && <HoneyButton onClick={installApp} value="다운로드" />}</>;
}
