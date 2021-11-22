import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

//isOpen : true면 보여주고, false면 모달이 닫힌다.
//handleClose : isOpen을 false로 바꿔주는 함수를 넣어주면 된다.
//width: Modal의 width를 입력
//height: Modal의 height를 입력
//title : 제목
//children : 내용
//isHideDefaultClose : true면 기본 x자 모달 닫기 버튼이 사라진다.
export default function Modal({ isOpen, handleClose, children, title, width, height, isHideDefaultClose }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const styles = { width, height, isHideDefaultClose };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    handleClose();
  };

  const modalContent = isOpen ? (
    <Overlay>
      <Container {...styles}>
        {!isHideDefaultClose && (
          <Header>
            <a href="#" onClick={handleCloseClick}>
              ❌
            </a>
          </Header>
        )}
        <Body>
          {title && <Title>{title}</Title>}
          <Content>{children}</Content>
        </Body>
      </Container>
    </Overlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.getElementById("modal-root"));
  } else {
    return null;
  }
}

Modal.defaultProps = {
  width: "80%",
  height: "calc(100% - 30px)",
  isOpen: false,
  handleClose: () => {},
  title: null,
  children: null,
  isHideDefaultClose: false
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: hidden;
`;

const Container = styled.div`
  background: white;
  width: 80%;
  height: 80%;
  border-radius: 15px;
  margin: ${({ isHideDefaultClose }) => (isHideDefaultClose ? 0 : "15px")};
  padding: ${({ isHideDefaultClose }) => (isHideDefaultClose ? 0 : "15px")};
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Title = styled.span``;

const Content = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
