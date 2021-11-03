import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import router from "next/router"
import { getCombinationList } from "../Redux/Async/combinationAsync"
import { combinationPostApi } from "../Shared/api"

import Tag from './Tag.jsx'

const Card = (props)=> {
  const {src, postTag, postTitle} = props;

  const styles = {
    src:src
  }
  
  return (
    <CardBox onClick={() =>{router.push(`combination/detail/${props.id}`)
    }}>
      <LeftBox {...styles} ></LeftBox>
      <RightBox>
        <PostTitle>{postTitle}</PostTitle>
        {postTag.map((tag,idx)=><Tag key={idx} value={"#"+tag}></Tag>)}
      </RightBox>
    </CardBox>
  )
}

Card.defaultProps = {
  src: "https://images.chosun.com/resizer/KSeDjO0Ti_vR2jehZcixB4tciRM=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NDW4SUJB7PJYLM3E7USJLZULMY.jpg",
}

const PostTitle = styled.div`
    
`;

const CardBox = styled.div`
  border: 1px solid #E5e5e5;
  margin: 10px auto;
  display: flex;
  width: 85%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #E5E5E5;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 30%;
  height: 100px;
  border-radius: 10px 0 0 10px ;
  background-color: green;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

// 제목, 태그, 좋아요 받아오기
const RightBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 70%;
  height: 100px;
  border-radius: 0 10px 10px 0;
`;


export default Card