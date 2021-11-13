import React from "react";
import styled from "styled-components"
import {useRouter} from "next/router"
import RedButton from "../../src/Components/Button/RedButton";

const Info = (props) => {
    const router = useRouter();
    const goEvent = () => {
        return router.push("/event")
    }
    return (
        <React.Fragment>
            <Wrap>
           <EventInfoImg src="/eventImg.svg"/>
           <Btn>
           <RedButton main
           value={"이벤트 참여하기"}
           onClick={goEvent}
           /> 
           </Btn>
           </Wrap>
        </React.Fragment>
    );
};

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
    width : 100%;
    align-items : center;
    position : absolute;
    margin : 321% 0;
`


export default Info;
