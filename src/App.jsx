import React, { useRef, useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { GlobalStyle } from "./GlobalStyle";

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Pagination } from "swiper/modules";


const Body = styled.body`

`

const SwiperContainer = styled(Swiper)`
  width: 100vw;
  height: 86vh;
  background: #1c1c1c;

  @media (max-width: 926px) {
    height: 88vh;
  }
`;

const SwiperSlideBox = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Intro = styled(SwiperSlideBox)`
  background: #1c1c1c;
  color: #fcfcfc;
  
`;

const SwiperSlideBoxGreen = styled(SwiperSlideBox)`
  background: green;
`;

const SwiperSlideBoxBlue = styled(SwiperSlideBox)`
  background: blue;
`;

const SwiperSlideBoxTomato = styled(SwiperSlideBox)`
  background: tomato;
`;

const HeaderStyled = styled(Header)`
position: fixed;
`;

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="App">
      <GlobalStyle/>
      <Body>
      {/* <Header/> */}
      <HeaderStyled />
      <SwiperContainer
        direction={"vertical"}
        slidesPerView={1.04}
        spaceBetween={0}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          pagination,
          clickable: true,
        }}
        modules={[Keyboard, Mousewheel, Pagination]}
      >
        <Intro>
          <Home />
        </Intro>
        <SwiperSlideBoxBlue>Experiências</SwiperSlideBoxBlue>
        <SwiperSlideBoxGreen>Projetos</SwiperSlideBoxGreen>
        <SwiperSlideBoxTomato>Contato</SwiperSlideBoxTomato>
        <SwiperSlideBox></SwiperSlideBox>
      </SwiperContainer>
      </Body>
    </div>
    
  );
}
