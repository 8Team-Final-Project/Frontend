import React,{useEffect} from "react";
import EventPost from "../../src/Components/Event/EventPost"
import { useSelector, useDispatch } from "react-redux";
import { eventPostListDB } from "../../src/Redux/Async/eventAsync";
import router, { useRouter } from "next/router";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const event = (props) => {
    const post_list = useSelector((state) => state.event);
    const isloaded = useSelector((state) => state.event.loaded);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(eventPostListDB());
    },[])
    
    return (
        <React.Fragment>
            <EventName>이번주 라면 꿀조합은?</EventName>
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

  return (
    <React.Fragment>
      <EventName>이번주 라면 꿀조합은?</EventName>
      <div>
        {isloaded && (
          <>
            {post_list &&
              post_list.postlist[0].map((p, idx) => {
                return <EventPost {...p} key={p.pid} />;
              })}
          </>
        )}
      </div>
      <FloatingButton onClick={floatButton} />
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

export default event;
