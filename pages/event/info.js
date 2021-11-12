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
           <EventInfoImg src="/test.svg"/>
           <Btn>
           <RedButton main
           value={"이벤트 참여하기"}
           onClick={goEvent}
           > 
           </RedButton>
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
    /* margin : 100px; */
    width : 100%;
    align-content : center;
    position : absolute;
    margin : 335% 5%
`


export default Info;
