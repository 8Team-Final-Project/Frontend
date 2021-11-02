import React, { useEffect } from "react";
import styled from "styled-components";
import {
    deleteCombinationPostDB,
    getCombinationPost,
} from "../../../src/Redux/Async/combinationAsync";
import { useDispatch } from "react-redux";

//꿀조합 상세페이지
const PartyDetail = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        //나중에 postId 페이지에서 받아와서 고쳐야해요
        const req = { postId: "617f698bf8ae35e2ceb31798" };
        dispatch(getCombinationPost(req));
    }, []);

    const setDelete = () => {
        //나중에 postId 페이지에서 받아와서 고쳐야해요
        const req = { postId: "617f698bf8ae35e2ceb31798" };
        dispatch(deleteCombinationPostDB(req));
    };

    return (
        <div>
            <DetailBox>
                <MainImg>사진</MainImg>
                <CenterBox>
                    <h3>제목:배고파</h3>
                </CenterBox>
                <CenterBox>
                    <FlexCenter>
                        <div>#태그1</div>
                        <div>#태그2</div>
                    </FlexCenter>
                </CenterBox>
                <CenterBox>
                    <DetailContent>내용~</DetailContent>
                </CenterBox>
                <CenterBox>
                    <button>즐겨찾기</button>
                </CenterBox>
                <CenterBox>
                    <button>좋아요!</button>
                    <button>싫어요!</button>
                </CenterBox>
                <CenterBox>
                    <button>수정하기</button>
                    <button onClick={setDelete}>삭제하기</button>
                </CenterBox>
            </DetailBox>
        </div>
    );
};
const FlexCenter = styled.div`
    display: flex;
`;

const CenterBox = styled.div`
    width: 350px;
    margin: 10px auto;
`;

const DetailBox = styled.div`
    width: 400px;
    height: 700px;
    border: 1px solid black;
    margin: auto;
`;

const MainImg = styled.div`
    width: 350px;
    height: 200px;
    background-color: gray;
    margin: 10px auto;
`;

const DetailContent = styled.div`
    width: 350px;
    height: 150px;
    border: 1px solid black;
`;

export default PartyDetail;
