import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCombinationPostDB } from "../../src/Redux/Async/combinationAsync";
import { useRouter } from "next/router";
import HashTagWriteInput from "../../src/Components/Input/HashTagWriteInput";
import RectangleImage from "../../src/Components/Shared/RectangleImage";
import ValidationInput from "../../src/Components/Input/ValidationInput"
import RedButton from "../../src/Components/Button/RedButton";
import WhiteButton from "../../src/Components/Button/WhiteButton";

//꿀조합 작성페이지
const write = () => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [postTitle, setTitle] = useState("");
    const [postContent, setContent] = useState("");
    const [postImg, setImg] = useState("");
    const [postTag, setTag] = useState("");
    const [postRecipe, setRecipe] = useState("");

    const setPost = () => {
        const postItem = {
            postTitle: postTitle,
            postContent: postContent,
            postImg: postImg,
            postTag: postTag,
            postRecipe: postRecipe,
            mainlist: true,
            event1list: false,
            event2list: false,
            event3list: false,
        };
        dispatch(addCombinationPostDB(postItem));
    };

    return (
        <div>
            <WriteBox>
                <CenterBox>
                    <RectangleImage
                      edit
                      imgUrl={postImg? postImg : false}
                      saveUrl={setImg}
                    ></RectangleImage>
                </CenterBox>
                <CenterBox>
                    <ValidationInput
                      label="제목을 입력해주세요"
                      value={postTitle}
                      setValue={setTitle}
                      maxValue={10}
                      defaultText
                      important
                    ></ValidationInput>
                </CenterBox>
                <CenterBox>
                    <ValidationInput
                      label="재료를 입력해주세요"
                      value={postRecipe}
                      setValue={setRecipe}
                      maxValue={15}
                      defaultText
                      important
                    ></ValidationInput>
                </CenterBox>
                <CenterBox>
                    <ValidationInput
                      label="내용을 입력해주세요"
                      value={postContent}
                      setValue={setContent}
                      maxValue={99}
                      defaultText
                      important
                      multiline
                      rows={5}
                    ></ValidationInput>
                </CenterBox>
                <CenterBox>
                    <HashTagWriteInput
                        tagList= {[...postTag]}
                        setTagList={setTag}
                        label="해시태그를 입력해주세요"
                        important
                    />
                </CenterBox>
                <CenterBox>
                    <FlexBox>
                        <WhiteButton 
                        value="취소"
                        onClick={() => {
                            {router.push("/combination")}
                        }}
                        />
                        <RedButton 
                        value="저장"
                        onClick={()=>{
                            setPost()
                            {router.push("/combination")}
                        }}/> 
                    </FlexBox>
                </CenterBox>
            </WriteBox>
        </div>
    );
};
const CenterBox = styled.div`
    width: 90%;
    margin: 10px auto;
`;

const WriteBox = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
`;
const FlexBox = styled.div`
    display: flex;
`;

export default write;
