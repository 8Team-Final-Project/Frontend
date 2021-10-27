import React from "react";



const EventPost = (props) => {
  return (
    <React.Fragment>
        <div style={{
                backgroundColor:"Gray",
                height : "100px",
                display : "flex",
        }}>
                <img src="https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/guest/image/jhenA17EwA0hMPpjb9z2iEx2--0.png"
                 style={{
                     width:"100px"
                     }}/>  
                     <p>타이틀</p>
                     <br/><br/><br/>
                태그 / 좋아요100 / 싫어요100
            </div>
    </React.Fragment>
  );
};

export default EventPost;