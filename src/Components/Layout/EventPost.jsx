import React from "react";
import router from "next/router";

const EventPost = (props) => {
  return (
    <React.Fragment>
      <div
        onClick={() => {
          router.push(`event/detail/${props._id}`);
        }}
        style={{
          backgroundColor: "Gray",
          height: "100px",
          display: "flex"
        }}
      >
        <img
          src={props.postImg}
          style={{
            width: "100px"
          }}
        />
        <p>{props.postTitle}</p>
        <br />
        <br />
        <br />
        {props.postTag} / 좋아요 {props.likeCnt}
      </div>
    </React.Fragment>
  );
};

export default EventPost;
