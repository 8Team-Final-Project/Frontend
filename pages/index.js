import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

//components
import RedButton from "../src/Components/Button/RedButton";
import HoneyButton from "../src/Components/Button/HoneyButton";

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
          <Image></Image>
          <Description>나만의 꿀조합 레시피를 다함께 즐겨요!</Description>
          <HoneyButton onClick={() => router.push("/combination")} value="꿀조합 보러 가기" />
        </DescriptionArea>
      </Container>
      <Container>
        <TitleArea>
          <SubTitle>아무도 몰랐을걸?</SubTitle>
          <Title>나만의 꿀조합 자랑하기</Title>
        </TitleArea>
        <DescriptionArea>
          <Image></Image>
          <Description>나만의 꿀조합~</Description>
          <RedButton onClick={() => router.push("/event")} value="이벤트 보러 가기" />
        </DescriptionArea>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
`;

const TitleArea = styled.div`
  width: 100%;
  margin: 70px 0;
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
  button {
    display: relative;
  }
`;

const Image = styled.img`
  width: 100%;
  min-height: 180px;
  background: orange;
`;

const Description = styled.span`
  display: inline-block;
  font-size: 18px;
  color: #979797;
  margin: 35px 0;
`;
