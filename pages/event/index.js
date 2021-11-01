import React from "react";
import EventPost from "../../src/Components/Layout/EventPost"
import { useSelector, useDispatch } from "react-redux";
import {useRouter} from "next/router";
import styled from "styled-components";     
import Link from "next/link"                                                                                

<<<<<<< HEAD
const party = (props) => {
    // const dispatch = useDispatch();

    // const post_list = useSelector((state) => state.post.list);

    // const [post, setPost] = useState("");
    // const onChange = (e) => {
    //     setPost(e.target.value);
    //   };
    // const addPost = () => {
    //     dispatch(commentActions.addCommentAPI(productId, comment));
    // }
=======
const event = (props) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const event_list = useSelector((state) => state.event.list);
>>>>>>> fb9add67f3e0de31480039a1fb45a7c8dd8b0306

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
