import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationList } from "../../src/Redux/Async/combinationAsync";
import Card from "../../src/Components/Card";
import Tag from "../../src/Components/Tag";
import FloatingButton from '../../src/Components/Button/FloatingButton';
import EventBtn from "../../src/Components/EventBtn";
import { useRouter } from "next/router";
import Search from "../search";
import PostSaveBtn from "../../src/Components/Mypage/PostSaveBtn";


//꿀조합 페이지
const combination = () => {

    const router = useRouter()

    const dispatch = useDispatch();

    const postList = useSelector((state) => state.combination.list[0])
    useEffect(() => {
        dispatch(getCombinationList());
    }, []);

    const floatButton = () => {
        router.push("/combination/write")
    }
    
    return (
        <div>
            <PageBox>
                <div>추천태그 검색은 3가지까지 가능</div>
                <div>
                <Search></Search>
                </div>
                {/* post는 객체하나 */}
                {postList && postList.map(postlist=><Card key={postlist._id} {...postlist}/>)}
                <FloatingButton onClick={floatButton}/>
            </PageBox>
        </div>
    );
};

const WriteBtn = styled.button`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid black;
  background-color: #FFFFFF;
`;

const FlexBox = styled.div`
    display: flex;
`;
const PageBox = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
`;
const SearchInput = styled.input`
    width: 350px;
`;


export default combination;
