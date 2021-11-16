import React, { useRef } from "react";
import styled from "styled-components";

//api
import { uploadApi } from "../../Shared/api";

//icons
import { BsCamera } from "react-icons/bs";

// image 
import BasicProfile from "../../Asset/Images/basicprofile.svg";

//edit : 입력하면 수정용으로 바뀝니다.
//saveUrl : 이미지 업로드 후 부모컴포넌트 state에 저장하기 위한 함수입니다. 부모컴포넌트에서 업로드 후 url을 저장할 setState 함수를 넣어주세요!
//imgUrl : 보여줄 이미지 url을 넣어주면 됩니다.
export default function CircleImage({ edit, saveUrl, imgUrl }) {
  const refFileInput = useRef(null);

  const upload = (e) => {
    //서버에 이미지 업로드하여 imgUrl을 받아와서 url을 저장시키는 함수입니다.

    const fileObj = e.target.files[0];
    const format = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

    //파일형식이 지정된 형식과 같다면 서버에 이미지업로드 요청을 보낸다.
    if (format.includes(fileObj && fileObj.type)) {
      uploadApi.imageUpload(fileObj).then((res) => saveUrl(res.data.postImg));
    }
  };

  if (edit)
    return (
      <ImageWrapper onClick={() => refFileInput.current.click()}>
        <Image src={imgUrl} />
        <BsCamera />
        <FileInput type="file" ref={refFileInput} onChange={upload} />
      </ImageWrapper>
    );

  return <Image src={imgUrl} />;
}

CircleImage.defaultProps = {
  imgUrl: BasicProfile.src,
  saveUrl: () => {},
  edit: false
};

const Image = styled.img`
  width: 130px;
  height: 130px;
  object-fit: none;
  border-radius: 50%;
  // border: 1px solid #B8B8B8;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 130px;
  cursor: pointer;
  &::before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 40px;
  }
`;

const FileInput = styled.input`
  display: none;
`;
