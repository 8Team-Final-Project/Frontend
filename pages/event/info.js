import React from "react";
import styled from "styled-components"
import {useRouter} from "next/router"

//componenet
import RedButton from "../../src/Components/Button/RedButton";

//이벤트에 대한 정보 페이지
const Info = () => {
    const router = useRouter();

    //이벤트 페이지로 가기
    const goEvent = () => {
        return router.push("/event")
    }

    return (
        <React.Fragment>
            <Wrap>
                <EventInfoImg src="/eventInfoImg.png"/>
                <Btn>
                <RedButton 
                info
                value={"이벤트 참여하기"}
                onClick={goEvent}
                /> 
                </Btn>
            </Wrap>
        </React.Fragment>
    );
};

// styled-component
const Wrap = styled.div`
width : 100%;
position : relative;
margin-top : 5%;
`

const EventInfoImg = styled.img`
width : 100%;
position : absolute;
`

const Btn = styled.div`
    width : 80%;
    align-items : center;
    position : absolute;
    margin : 321% 10%;
`


export default Info;
