import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

//images
import mainBnr from "../src/Asset/Images/main_bnr.svg";
import eventBnr1 from "../src/Asset/Images/main_event_bnr1.png";
import eventBnr2 from "../src/Asset/Images/main_event_bnr2.png";
import eventBnr3 from "../src/Asset/Images/main_event_bnr3.png";
import fishBread from "../src/Asset/Images/fish_bread.svg";
import ramen from "../src/Asset/Images/ramen.svg";
import honeybtn from "../src/Asset/Images/honeybtn.svg";
import goeventbtn from "../src/Asset/Images/goeventbtn.svg";

//icons
import questionIcon from "../src/Asset/icons/question_icon.svg";

//메인페이지입니다.
export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>꿀조합</title>
        <meta name="description" content="" />
        <link rel="icon" href="/" />
      </Head>

      {/* 꿀조합 소개 */}
      <Container>
        <TitleArea>
          <SubTitle>입맛이 달라도 OK!</SubTitle>
          <Title>세상의 모든 꿀조합을 찾아서</Title>
        </TitleArea>
        <DescriptionArea>
          <Image src={mainBnr.src} width="100%" />
          <Description>나만의 꿀조합 레시피를 다함께 즐겨요!</Description>
          <BtnImg src={honeybtn.src} width="80%" onClick={() => {router.push("/combination")}} />
        </DescriptionArea>
      </Container>

      {/* 이벤트 */}
      <Container>
        <TitleArea>
          <SubTitle>아무도 몰랐을걸?</SubTitle>
          <Title>나만의 꿀조합 자랑하기</Title>
        </TitleArea>
        <DescriptionArea>
          <EventBnr>
            <EventBnrBox1>
              <Image src={ramen.src} width="100%" />
              <Tag>#라면냠냠</Tag>
            </EventBnrBox1>
            <EventBnrBox2>
              <Image src={fishBread.src} width="100%" />
              <Tag>#붕어빵냠냠</Tag>
            </EventBnrBox2>
          </EventBnr>
          <Description>
            <p>진행되는 이벤트 주제에 맞는 꿀조합을 위의 태그와 함께 업로드 해주세요!</p>
          </Description>
        </DescriptionArea>
        <DescriptionArea>
          <Image src={eventBnr1.src} width="100%" height="260px" />
          <Image src={eventBnr2.src} width="100%" height="260px" />
          <Image src={eventBnr3.src} width="100%" height="260px" />
          <Description>
            <p>사람들과 나만의 꿀조합도 공유하고,</p> <p>푸짐한 상품도 받아가세요!</p>
          </Description>
          <Btn>
          <BtnImg src={goeventbtn.src} width="80%" onClick={() => {router.push("/event/info")}} />
          </Btn>
        </DescriptionArea>
      </Container>

      {/* 문의  */}
      <Container>
        <DescriptionArea>
          <Image width="80px" height="90px" src={questionIcon.src} />
          <Description>
            <p>
              궁금하신 점은 <a href="https://wpub6shfa65.typeform.com/to/rhCKtx33">여기</a>를 눌러
            </p>
            <p>문의해주세요!</p>
          </Description>
        </DescriptionArea>
      </Container>

      {/* 다운로드 */}
      <Container>
        <DescriptionArea>
          <Description>
            <p>앱을 다운로드하여,</p>
            <p>더욱 편하게 사용해보세요!</p>
          </Description>
        </DescriptionArea>
      </Container>
    </div>
  );
}

// styled-component
const Container = styled.div`
  width: 100%;
  padding: 60px 0 100px 0;
  &:last-child {
    padding-bottom: 0;
  }
`;

const TitleArea = styled.div`
  width: 100%;
  padding-bottom: 70px;
  text-align: center;
`;

const SubTitle = styled.strong`
  font-size: 30px;
  color: #3c3c3c;
  font-weight: lighter;
`;

const Title = styled.h3`
  font-size: 30px;
  color: #3c3c3c;
`;

const DescriptionArea = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    display: relative;
  }
  a {
    text-decoration: underline;
    font-weight: bold;
    color: inherit;
  }
`;

const BtnImg = styled.img`
  cursor : pointer;
`

const Btn = styled.div`
  width : 100%;
`

const Image = styled.img`
  /* vertical-align: bottom; */
`;

const Description = styled.div`
  font-size: 18px;
  color: #979797;
  margin: 25px 0 70px 0;
  max-width: 300px;
  a {
    display: inline-block;
  }
`;

const EventBnr = styled.div`
  display: flex;
`;

const EventBnrBox1 = styled.div`
  width: 90%;
  margin-left: 30px;
  
`;

const EventBnrBox2 = styled.div`
  width : 90%;
  margin : 6px 30px 0px 0px;

`

const Tag = styled.span`
  border: 2px solid #ff7775;
  display: inline-flex;
  min-width: 50px;
  padding: 5px 15px;
  height: 40px;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ff7775;
  align-items: center;
  margin-top: 5px;
`;
