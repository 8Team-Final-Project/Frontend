import React,{useEffect} from "react";
import EventPost from "../../src/Components/Layout/EventPost"
import { useSelector, useDispatch } from "react-redux";
import { eventPostListDB } from '../../src/Redux/Async/eventAsync';
import {useRouter} from "next/router";
import styled from "styled-components";

const event = (props) => {
    const post_list = useSelector((state) => state.event);
    const isloaded = useSelector((state) => state.event.loaded);
    console.log(post_list)
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(eventPostListDB());
    },[])
    
    return (
        <React.Fragment>
            <h1>이번주 라면 꿀조합은?</h1>

            {isloaded && (
                <>
                {post_list && post_list.postlist.map((p, idx) => {return (<EventPost {...p} key={p.pid}/>)})} 
                </>
            )}
        </React.Fragment>
    );
};

export default event;
