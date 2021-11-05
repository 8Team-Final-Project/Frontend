import React, { useState } from "react";
import styled from "styled-components";
import Router, { useRouter } from "next/router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getEventPostDB, deleteEventPostDB, likeEventPostDB } from "../../Redux/Async/eventAsync";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  //Drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List style={{ borderRadius: "1000px" }}>
        {["수정", "삭제", "취소"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <PostImg src={post && post.postImg} />
      <Title>
        {post && post.postTitle} <BsThreeDotsVertical />
      </Title>
      <div style={{ borderRadius: "1000px" }}>
        {["bottom"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>

      <Intro> 취향 안타는 환상의 조합</Intro>

      <Wrap>
        <Mix>
          꿀조합<span>민초, 붕어빵, 취두부</span>
        </Mix>

        <Recipe>레시피</Recipe>
        <Text> {post && post.postContent} </Text>

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
