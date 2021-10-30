import React from "react";
import EventPost from "../../src/Components/Layout/EventPost"
import { useSelector, useDispatch } from "react-redux";
import {useRouter} from "next/router";
import styled from "styled-components";     
import Link from "next/link"                                                                                

const event = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const event_list = useSelector((state) => state.event.list);

    return (
        <React.Fragment>
            <h1>이번주 라면 꿀조합은?</h1>


            <EventPost onClick={test}/>


            <button onClick={() => {router.push('/event/edit/write')}}>router</button>
            <Link  href={'/mypage'}>
            <button>링크</button>
            </Link>
        </React.Fragment>
    );
};

export default event;
