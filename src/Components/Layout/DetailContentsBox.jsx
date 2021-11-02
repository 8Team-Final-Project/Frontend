import React from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux"
import { getEventPostDB, deleteEventPostDB } from "../../Redux/Async/eventAsync";

//머테리얼



const DetailContentsBox = (props) => {
    const dispatch = useDispatch();
    const event = useSelector((state) => state.event.post)
    console.log(event);

    React.useEffect(() => {
        const response = { postId : "618114cd042ef525c4dc9b02" };
        dispatch(getEventPostDB(response));
    }, [])


    return (
    <React.Fragment>
            <PostImg/>
          <Title> { event && event.postTitle } </Title> 
          {/* <Title> 민트초코 붕어빵 </Title>  */}
            <Intro> 취향 안타는 환상의 조합</Intro>
            
            <Wrap>
                    <p>
                    <Mix>꿀조합<span>민초, 붕어빵, 취두부</span></Mix>
                    </p>
                    <Recipe>레시피</Recipe>
                <Text> { event && event.postContent } </Text>
                {/* <Text> 붕어빵에서 팥을 빼고 민트초코를 넣어주세요. </Text> */}
            </Wrap>
    </React.Fragment>
  );
};


const PostImg = styled.div`
    background-image : url('https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
    width : 364px;
    height : 225px;
    margin-bottom : 36px;
    border-radius : 12px;
`

const Title = styled.p`
    font-size : 24px;
    font-weight : bold;
    margin : 15px;
`

const Intro = styled.p`
    color : #B8B8B8;
    font-size : 16px;
    margin-bottom : 62px;
    `

const Wrap = styled.div`
    width : 100%;
    `

const Mix = styled.div`
    display : flex;
    text-align : left;
    color : #878787;
    margin-bottom : 45px;

    & span{
        color : black;
        margin-left : 24px;
    }
    `

const Recipe = styled.p`
    text-align : left;
    color : #878787;
    margin-bottom : 20px;
`


const Text = styled.p`
    color : black;
    text-align : left;
`

export default DetailContentsBox;