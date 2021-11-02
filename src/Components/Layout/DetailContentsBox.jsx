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
        const response = { postId : "617fb1abf8ae35e2ceb3180f" };
        dispatch(getEventPostDB(response));
    }, [])


    return (
    <React.Fragment>
          <Title> { event && event.postTitle } </Title> 
            <Intro> 취향 안타는 환상의 조합</Intro>
            
            <Wrap>
                    <TextTitle>꿀조합</TextTitle> 
                    <Text>민초, 붕어빵, 취두부</Text>
                    <TextTitle>레시피</TextTitle>
                <Text> { event && event.postContent } </Text>
            </Wrap>
    </React.Fragment>
  );
};

const Title = styled.p`
    font-size : 24px;
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

const TextTitle = styled.p`
    color : #878787;
    text-align : left;
`

const Text = styled.p`
    text-align : left;
`

export default DetailContentsBox;