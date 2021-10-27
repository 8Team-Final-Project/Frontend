import React from "react";
import styled from "styled-components";

//꿀조합 페이지
const combination = () => {
    return (
        <div>
            <PageBox>
            <div>추천태그 검색은 3가지까지 가능</div>
                <FlexBox>
                    <SearchInput></SearchInput><button>검색</button>
                </FlexBox>
                    <div>
                        <text>추천태그1</text> <text>추천태그2</text>
                    </div>
                <div>라면꿀조합 이벤트</div>
                <PostBox>
                    <h3>이벤트 참여하기</h3>
                </PostBox>
                <PostBox>
                    <FlexBox>
                        <PostImage>사진</PostImage>
                        <FlexBox style={{
                            flexDirection: "column"
                        }}>
                            <div>엽떡 + 허니콤보</div>
                            <FlexBox>
                            <div>태그1</div><div>태그2</div>
                            <div>좋아요</div><div>2</div>
                            <div>싫어요</div><div>3</div>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                </PostBox>
                <PostBox>
                    <FlexBox>
                        <PostImage>사진</PostImage>
                        <FlexBox style={{
                            flexDirection: "column"
                        }}>
                            <div>공화춘 + 불닭볶음면</div>
                            <FlexBox>
                            <div>태그1</div><div>태그2</div>
                            <div>좋아요</div><div>4</div>
                            <div>싫어요</div><div>7</div>
                            </FlexBox>
                        </FlexBox>
                    </FlexBox>
                </PostBox>
            </PageBox>
        </div>
    );
};

const FlexBox = styled.div`
    display: flex;
`;
const PageBox = styled.div`
    width: 400px;
    height: 700px;
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
