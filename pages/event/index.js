import React,{useEffect} from "react";
import EventPost from "../../src/Components/Event/EventPost"
import { useSelector, useDispatch } from "react-redux";
import { eventPostListDB } from "../../src/Redux/Async/eventAsync";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const event = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const post_list = useSelector((state) => state.event);
    const isloaded = useSelector((state) => state.event.loaded);

    const goEventInfo = () => {
        return router.push("/event/info")
    }

    

    useEffect(()=>{
        dispatch(eventPostListDB());
    },[])
    
    return (
        <React.Fragment>
            <EventName>이번주 붕어빵 꿀조합은?</EventName>
            <WrapBanner>
                <BannerImg src="/eventbanner.svg"
                onClick={goEventInfo}/>
            </WrapBanner>
            <div>
            {isloaded && (
                <>
                {post_list && post_list.postlist[0].map((p, idx) => {return (<EventPost {...p} key={p.pid}/>)})} 
                </>
            )}
            </div>
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
const DownBannerImg = styled.img`
    width : 30px;
    display : inline-block;
    right : 40%;
    position : absolute;
`

const EvnetImg = styled.img`

`

export default event;
