import React from "react";
import EventPost from "../../src/Components/Layout/EventPost"
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const party = (props) => {
    const dispatch = useDispatch();

    const post_list = useSelector((state) => state.post.list);

    const [post, setPost] = useState("");
    const onChange = (e) => {
        setPost(e.target.value);
      };
    const addPost = () => {
        dispatch(commentActions.addCommentAPI(productId, comment));
    }

    return (
        <React.Fragment>
            <h1>이번주 라면 꿀조합은?</h1>
            <EventPost/>
        </React.Fragment>
    );
};

export default party;
