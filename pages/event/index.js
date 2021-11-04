import React,{useEffect} from "react";
import EventPost from "../../src/Components/Layout/EventPost"
import { useSelector, useDispatch } from "react-redux";
import { eventPostListDB } from '../../src/Redux/Async/eventAsync';
import {useRouter} from "next/router";
import styled from "styled-components";

const event = (props) => {
    const post_list = useSelector((state) => state.event);
    const isloaded = useSelector((state) => state.event.loaded);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(eventPostListDB());
    },[])
    
    return (
        <React.Fragment>
            <Eventname>이번주 라면 꿀조합은?</Eventname>

            {isloaded && (
                <>
                {post_list && post_list.postlist.map((p) => {return (<EventPost {...p}/>)})} 
                </>
            )}
        </React.Fragment>
    );
};


const Eventname = styled.p`
    font-size : 24px;
    font-weight : bold;
    text-align : center;
    margin-top : 33px;
    margin-bottom : 16px;
`

export default event;
