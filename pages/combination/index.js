import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getCombinationList } from "../../src/Redux/Async/combinationAsync";
import Card from "../../src/Components/Card";
import Tag from "../../src/Components/Tag";
import FloatingBtn from "../../src/Components/FloatingBtn";
import EventBtn from "../../src/Components/EventBtn";
import{ useRouter } from "next/router";

//꿀조합 페이지
const combination = () => {

    const router = useRouter()

    const dispatch = useDispatch();

    const postList = useSelector((state) => state.combination.list)


    useEffect(() => {
        dispatch(getCombinationList());
    }, []);
    
    return (
        <div>
            <PageBox>
                <Logo src="/logo.png"></Logo>
                <div>추천태그 검색은 3가지까지 가능</div>
                <FlexBox>
                    <SearchInput></SearchInput>
                    <button>검색</button>
                </FlexBox>
                <div>
                    <span>추천태그1</span> <span>추천태그2</span>
                </div>
                <div>라면꿀조합 이벤트</div>
                {/* post는 객체하나 */}
                {postList.map(postlist=><Card key={postlist._id} {...postlist}/>)}
                <FloatingBtn></FloatingBtn>
                <WriteBtn
                onClick={()=>{
                    {router.push("/combination/write")}
                }}
                >!글쓰기!</WriteBtn>
                <EventBtn></EventBtn>
            </PageBox>
        </div>
    );
};
const Logo = styled.img`
    /* width: 100px;
    height: 50px; */
`;

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
    width: 400px;
    height: auto;
    border: 1px solid black;
    margin: auto;
`;
const SearchInput = styled.input`
    width: 350px;
`;
const PostBox = styled.div`
    width: 350px;
    height: 70px;
    border: 1px solid black;
    margin: 5px auto;
`;
const PostImage = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid black;
`;

export default combination;
