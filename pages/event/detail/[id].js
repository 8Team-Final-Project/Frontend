import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { getEventPostDB, deleteEventPostDB } from "../../../src/Redux/Async/eventAsync";


//이벤트상세페이지
const EventDetail = (props) => {
    const dispatch = useDispatch();


    const event = useSelector((state) => state.event.post)
    console.log(event);
    React.useEffect(() => {
        const res = { postId : "617fb1abf8ae35e2ceb3180f"};
        dispatch(getEventPostDB(res));
    }, [])

    return (
        <React.Fragment>
        <div style={{textAlign:"center"}}>
            <img/>
            <p>{ event && event.postTitle }</p>
            <br/>
            <p>#서브웨이</p>
            <br/>
            <div>{ event && event.postContent }</div>
            <br/>
            <button> 찜 </button>
            <button> 좋아요 </button>
            <button> 싫어요</button>
            <br/>
            <br/>
            <button> 수정 </button>
            <button onClick={(e)=>{dispatch(deleteEventPostDB(event.post))}}> 
            삭제
            </button>
            <br/>
            <br/>
            <input></input>
            
            <button>댓글작성</button>
            <div>
                닉네임 댓글 
            </div>
        </div>
        
        </React.Fragment>
    );
};

export default EventDetail;
