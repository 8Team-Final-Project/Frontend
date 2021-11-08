import React from "react"
import styled from "styled-components"
import { useSelector, useDispatch } from "react-redux"
import { useRouter} from "next/router"
import { getCombinationList } from "../Redux/Async/combinationAsync"
import { combinationPostApi } from "../Shared/api"

import Tag from './Tag.jsx'
import { flexbox } from "@mui/system"
import { dividerClasses } from "@mui/material"

const Card = (props)=> {
  const {src, postTag, postTitle, likeCnt} = props;

  const styles = {
    src: src
  }
  
  const router = useRouter();
  return (
    <CardBox onClick={() =>{router.push(`combination/detail/${props._id}`)
    }}>
      <LeftBox {...styles} ></LeftBox>
      <RightBox>
        <PostTitle>{postTitle}</PostTitle>
        {postTag.map((tag,idx)=><Tag key={idx} value={"#"+[...tag]}></Tag>)}
        <div 
        style={{
          display:"flex",
          width:"30px",
          margin: "5px 5px 5px auto"
          }}>
        <div><img src="/likeOn.png" /></div>
        <div>{likeCnt}</div>
        </div>
      </RightBox>
    </CardBox>
  )
}

Card.defaultProps = {
  src: "https://images.chosun.com/resizer/KSeDjO0Ti_vR2jehZcixB4tciRM=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/NDW4SUJB7PJYLM3E7USJLZULMY.jpg",
}

const PostTitle = styled.div`
    
`;
const FlexBox = styled.div`
  display: flex;
`;


const CardBox = styled.div`
  border: 1px solid #E5e5e5;
  margin: 10px auto;
  display: flex;
  width: 95%;
  height: 120px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #E5E5E5;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 35%;
  height: 120px;
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
  width: 65%;
  height: 120px;
  border-radius: 0 10px 10px 0;
`;


export default Card