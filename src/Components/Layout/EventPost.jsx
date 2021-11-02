import React from "react";



const EventPost = (props) => {
  return (
    <React.Fragment>
        <div style={{
                backgroundColor:"Gray",
                height : "100px",
                display : "flex",
        }}>
                <img src={props.postImg}
                 style={{
                     width:"100px"
                     }}/>  
                     <p>{props.postTitle}</p>
                     <br/><br/><br/>
                {props.postTag} / 좋아요 {props.likeCnt}
            </div>
    </React.Fragment>
  );
};

export default EventPost;