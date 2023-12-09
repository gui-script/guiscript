import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Imagens

import guiIlustration_1 from "../../assets/gui-1.svg"
import htmlIcon from "../../assets/htmlIcon.svg"
import cssIcon from "../../assets/cssIcon.svg"
import jsIcon from "../../assets/jsIcon.svg"
import pythonIcon from "../../assets/pythonIcon.svg"
import reactIcon from "../../assets/reactIcon.svg"
import styledcomponentsIcon from "../../assets/styledcomponentsIcon.svg"
import bootstrapIcon from "../../assets/bootstrapIcon.svg"
import tailwindIcon from "../../assets/tailwindIcon.svg"
import saasIcon from "../../assets/saasIcon.svg"
import gitIcon from "../../assets/gitIcon.svg"
import githubIcon from "../../assets/githubIcon.svg"
import figmaIcon from "../../assets/figmaIcon.svg"

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Keyboard, Mousewheel } from "swiper/modules";

const SwiperContainer = styled(Swiper)`
  width: 100vw;
  height: 20vh;
  color: #ffffff;
  padding-right: 10vw;
  margin-left: 10vw;

  @media (max-width: 1020px) {
    height: 12vh;
  }
`;

const SwiperSlideBox = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Presentation = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #fcfcfc;

  background: radial-gradient(
      10.58% 41.32% at 100% 58.61%,
      rgba(180, 85, 255, 0.21) 0%,
      rgba(180, 85, 255, 0) 100%
    ),
    linear-gradient(
      354deg,
      rgba(255, 255, 255, 0.04) 5.14%,
      rgba(255, 255, 255, 0) 100%
    );

    @media (max-width: 1020px) {
      padding-top: 8vh;
    }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;   
    padding-top: 1vh;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Rubik", sans-serif;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: flex-start;

  @media (max-width: 1020px) {
    text-align: center;
    justify-self: center;
    align-items: center;
  }
`;

const TitleInicio = styled.h1`
  display: flex;
  font-family: "Rubik", sans-serif;
  font-size: 1.61111em;
  font-weight: 500;
  padding-bottom: 12px;
  justify-content: flex-start;

  @media (max-width: 1020px) {
    font-family: "Rubik", sans-serif;
    
    padding-bottom: 6px;
    font-size: 1.4em;
    font-weight: 500;
    justify-content: center;
  }
`;

const TitleTechStack = styled(TitleInicio)`
font-size: 1.8em;
font-weight: 600;
  justify-content: center;
`;

const LogoDefault = styled.h1`
  &:hover {
    display: none;
  }
`;

const LogoHover = styled.h1`
  display: none;
  &:hover {
    display: inherit;
  }
`;

const PinkText = styled.span`
  color: #d966c1;
`;

const PurpleText = styled.span`
  color: #b455ff;
`;

const GreenText = styled.span`
  color: #66d994;
`;

const LilacText = styled.h2`
  color: #dfb2f2;
`;

const Logo = styled.a`
  display: block;
  font-family: "Rubik", sans-serif;
  font-size: 2.37037em;
  text-decoration: none;
  padding-bottom: 8px;
  color: #fcfcfc;
  &:hover ${LogoDefault} {
    display: none;
  }
  &:hover ${LogoHover} {
    display: inherit;
  }

  @media (max-width: 484px) {
    font-size: 0.8em;
  }

  @media (max-width: 1020px) {
    font-size: 2em;
  }
`;

const TextInicio = styled.p`
  min-width: 400px;
  max-width: 440px;
  font-family: "Poppins", sans-serif;
  font-size: 1.06em;
  margin-bottom: 14px;
  text-align: justify;

  @media (max-width: 1020px) {
    width: 140px;
    height: 40px;
    font-size: 0.94em;
    margin-bottom: 6vh;
  }
`;

const ButtonInicio = styled.button`
  width: 156px;
  height: 43px;
  background: #9400d3;
  color: #f6f6f6;
  border: none;
  border-radius: 16px;
  font-family: "Poppins", sans-serif;
  font-size: 1em;

  &:hover {
    background: none;
    border: solid #9400d3;
    color: #9400d3;
    
    cursor: pointer;
  }

  @media (max-width: 1020px) {
    width: 140px;
    height: 40px;
    font-size: 0.8em;
  }
`;

const GuIlustration = styled.img`
  height: 60vh;

  @media (max-width: 1020px) {
    height: 40vh;
  }
`;

const TechStackImage = styled.img`

  @media (max-width: 1020px) {
    max-height: 4vh;
  }
`;

function Home() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Presentation>
        <GridContainer>
          <GridItem>
            <TitleInicio>Olá, seja bem-vindo ao</TitleInicio>
            <Logo>
              <LogoDefault>{"< GuiScript />"}</LogoDefault>
              <LogoHover>
                <PinkText>{"<"}</PinkText>
                {" GuiScript "}
                <GreenText>{"/"}</GreenText>
                <PurpleText>{">"}</PurpleText>
              </LogoHover>
            </Logo>
            <TextInicio>
              Aqui você vai aprender um pouco mais sobre Gui, um desenvolvedor
              front-end, educador, admirador e estudante de belos designs.
            </TextInicio>
            <ButtonInicio type="button" onclick="">Conheça +</ButtonInicio>
          </GridItem>
          <GridItem>
            <figure>
              <GuIlustration src={guiIlustration_1} alt="" />
            </figure>
          </GridItem>
        </GridContainer>
        <TechStack>
          <TitleTechStack>
            <PurpleText>{" < > "}</PurpleText>
            {" Tech Stack "}
            <PurpleText>{" </> "}</PurpleText>
          </TitleTechStack>
          <SwiperContainer
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            keyboard={{
              enabled: true,
            }}
            mousewheel={true}
            modules={[Autoplay, Keyboard, Mousewheel]}
          >
            <SwiperSlideBox>
              <TechStackImage src={htmlIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={cssIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={jsIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={pythonIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={reactIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage
                src={styledcomponentsIcon}
                alt=""
              />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage
                src={bootstrapIcon}
                alt=""
              />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage
                src={tailwindIcon}
                alt=""
              />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={saasIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={gitIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={githubIcon} alt="" />
            </SwiperSlideBox>
            <SwiperSlideBox>
              <TechStackImage src={figmaIcon} alt="" />
            </SwiperSlideBox>
          </SwiperContainer>
        </TechStack>
      </Presentation>
      ;
    </>
  );
}

export default Home;
