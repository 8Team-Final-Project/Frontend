import React, { useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import MenuButton from "../Shared/CommentEditDelete";
import { getEventPostDB, deleteEventPostDB, likeEventPostDB } from "../../Redux/Async/eventAsync";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { red } from "@mui/material/colors";

const DetailContentsBox = (props) => {
  const dispatch = useDispatch();

  const {
    query: { id }
  } = useRouter();

  const post = useSelector((state) => state.event.post);

  React.useEffect(() => {
    if (id) dispatch(getEventPostDB(id));
  }, [id]);

  const deleteEventPost = () => {
    dispatch(deleteEventPostDB(id));
    Router.push("/event");
  };

  const editpage = () => {
    Router.push(`/event/edit/${id}`);
  };

  const likeEventPost = () => {
    dispatch(likeEventPostDB(id));
  };

  // 머테리얼 Drawer
  const [state, setState] = React.useState({
    bottom: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "auto" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List>
        <MenuButton />
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <PostImg src={post && post.postImg} />
      <Title>
        {post && post.postTitle} <BsThreeDotsVertical />
      </Title>
      <div>
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <Intro> {post && post.postSubtitle} </Intro>

      <Wrap>
        <Mix>
          꿀조합<span>{post && post.postRecipe}</span>
        </Mix>

        <Recipe>레시피</Recipe>
        <Text> {post && post.postContent} </Text>
        {post && post.postTag}

        <button onClick={editpage}>수정</button>
        <button onClick={deleteEventPost}>삭제</button>

        <button onClick={likeEventPost}>좋아요{post && post.likeCnt}</button>
      </Wrap>
    </React.Fragment>
  );
};

const PostImg = styled.div`
  width: 364px;
  height: 225px;
  margin-bottom: 36px;
  border-radius: 12px;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 15px;
`;

const Intro = styled.p`
  color: #b8b8b8;
  font-size: 16px;
  margin-bottom: 62px;
`;

const Wrap = styled.div`
  width: 100%;
`;

const Mix = styled.div`
  display: flex;
  text-align: left;
  color: #878787;
  margin-bottom: 45px;

  & span {
    color: black;
    margin-left: 24px;
  }
`;

const Recipe = styled.p`
  text-align: left;
  color: #878787;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: black;
  text-align: left;
`;

const HeartImg = styled.img``;

export default DetailContentsBox;
