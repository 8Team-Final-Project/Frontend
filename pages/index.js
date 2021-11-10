import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

//components
import RedButton from "../src/Components/Button/RedButton";
import HoneyButton from "../src/Components/Button/HoneyButton";

//images
import eventBnr1 from "../src/Asset/Images/main-event-bnr1.png";
import eventBnr2 from "../src/Asset/Images/main-event-bnr2.png";
import eventBnr3 from "../src/Asset/Images/main-event-bnr3.png";

//icons
import questionIcon from "../src/Asset/icons/question_icon.svg";

//메인페이지입니다.
export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>모닥불</title>
        <meta name="description" content="" />
        <link rel="icon" href="/" />
      </Head>
      <Container>
        <TitleArea>
          <SubTitle>입맛이 달라도 OK!</SubTitle>
          <Title>세상의 모든 꿀조합을 찾아서</Title>
        </TitleArea>
        <DescriptionArea>
          {/* combination_bnr 넣어야할 자리 */}
          <Image />
          <Description>나만의 꿀조합 레시피를 다함께 즐겨요!</Description>
          <HoneyButton main onClick={() => router.push("/combination")} value="꿀조합 보러 가기" />
        </DescriptionArea>
      </Container>
      <Container>
        <TitleArea>
          <SubTitle>아무도 몰랐을걸?</SubTitle>
          <Title>나만의 꿀조합 자랑하기</Title>
        </TitleArea>
        <DescriptionArea>
          {/* event_bnr 넣어야할 자리 */}
          <Image />
          <Description>
            <p>진행되는 이벤트 주제에 맞는 꿀조합을 지정 태그와 함께 업로드 해주세요!</p>
          </Description>
        </DescriptionArea>
        <DescriptionArea>
          <Image src={eventBnr1.src} width="100%" height="260px" />
          <Image src={eventBnr2.src} width="100%" height="260px" />
          <Image src={eventBnr3.src} width="100%" height="260px" />
          <Description>
            <p>사람들과 나만의 꿀조합도 공유하고,</p> <p>푸짐한 상품도 받아가세요!</p>
          </Description>
          <RedButton main onClick={() => router.push("/event")} value="이벤트 보러 가기" />
        </DescriptionArea>
      </Container>
      <Container>
        <DescriptionArea>
          <Image width="80px" height="90px" src={questionIcon.src} />
          <Description>
            <p>
              궁금하신 점은 <a href="#">여기</a>를 눌러
            </p>
            <p>문의해주세요!</p>
          </Description>
        </DescriptionArea>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 60px 0 100px 0;
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

const Image = styled.img`
  vertical-align: bottom;
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
