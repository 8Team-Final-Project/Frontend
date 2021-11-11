import React,{useEffect, useCallback, useState} from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { eventPostListDB } from "../../src/Redux/Async/eventAsync";
import { useRouter } from "next/router";

//component
import Loader from "../../src/Components/Shared/Loader"
import EventPost from "../../src/Components/Event/EventPost"


const event = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.event);
    const isloaded = useSelector((state) => state.event.loaded);

    useEffect(()=>{
        dispatch(eventPostListDB());
    },[])
    
    const goEventInfo = () => {
        return router.push("/event/info")
    }
    
    //무한스크롤 test
    const [target, setTarget] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemLists, setItemLists] = useState([1]);

    const getMoreItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        setItemLists((itemLists) => itemLists.concat(Items));
        setIsLoaded(false);
      };
    
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
          observer.unobserve(entry.target);
          await getMoreItem();
          observer.observe(entry.target);
        }
      };

      
    useEffect(() => {
        let observer;
        if (target) {
        observer = new IntersectionObserver(onIntersect, {
            threshold: 0.4,
        });
        observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target  ]);



    
    return (
        <React.Fragment>
            <EventName>이번주 붕어빵 꿀조합은?</EventName>
            <WrapBanner>
                <BannerImg src="/eventbanner.svg"
                onClick={goEventInfo}/>
            </WrapBanner>

            <div >
            {isloaded && (
                <>
                {post_list && post_list.postlist[0].map((p, idx) => {return (<EventPost {...p} key={p.pid}/>)})} 
                </>
            )}
            </div>
            
            <div ref = {setTarget}>
                <Loader />
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
