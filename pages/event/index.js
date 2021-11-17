import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getEventPostListDB } from "../../src/Redux/Async/postAsync";
import { useRouter } from "next/router";

//component
import Card from "../../src/Components/Card"


const event = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post);
    const isloaded = useSelector((state) => state.post.loaded);

    useEffect(()=>{
        dispatch(getEventPostListDB());
    },[])
    
    const goEventInfo = () => {
        return router.push("/event/info")
    }
		
    return (
        <React.Fragment>
            <EventName>이번주 붕어빵 꿀조합은?</EventName>
            <WrapBanner>
                <BannerImg src="/eventbanner.svg"
                onClick={goEventInfo}/>
            </WrapBanner>

            <CardWrap>
            {isloaded && (
                <>
                {post_list && post_list?.postlist[0].map((p, idx) => {return (<Card {...p} key={p.pid}/>)})} 
                </>
            )}
            </CardWrap>
        </React.Fragment>
    );
};

const EventName = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 33px;
  margin-bottom: 16px;
`;


const WrapBanner = styled.div`
    width :100%;
    position : relative;
`

const BannerImg = styled.img`
    width : 100%;

`
const CardWrap = styled.div`
    margin : 8% 6% auto;
`

export default event;
