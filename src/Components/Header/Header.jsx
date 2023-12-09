import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import Menu from "../Menu/Menu";
import logoDefault from "../../assets/guiscriptLogoWhite.svg"
import logoHover from "../../assets/guiscriptLogoColor.svg"

const LogoDefault = styled.img`
  height: 10vh;

  &:hover {
    display: none;
  }

  @media (max-width: 926px) {
    height: 6.98vh;
  }
`;

const LogoHover = styled.img`
  height: 10vh;
  display: none;

  &:hover {
    display: inherit;
  }

  
  @media (max-width: 926px) {
    height: 6.98vh;
  }
`;

const Logo = styled.a`

  &:hover ${LogoDefault} {
    display: none;
  }
  &:hover ${LogoHover} {
    display: inherit;
  }
`

// const LogoDefault = styled.h1`
//   &:hover {
//     display: none;
//   }
// `;

// const LogoHover = styled.h1`
//   display: none;
//   &:hover {
//     display: inherit;
//   }
// `;

// const PinkUnderline = styled.span`
//   color: #d966c1;
// `;

// const PurpleUnderline = styled.span`
//   color: #b455ff;
// `;

// const GreenUnderline = styled.span`
//   color: #66d994;
// `;

// const Logo = styled.a`
//   font-family: "Rubik", sans-serif;
//   font-size: 1em;
//   text-decoration: none;
//   color: #fcfcfc;

//   &:hover ${LogoDefault} {
//     display: none;
//   }
//   &:hover ${LogoHover} {
//     display: inherit;
//   }
// `;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  list-style: none;
  height: 14vh;
  background: #1c1c1c;
  color: #fcfcfc;
  padding: 0 8vw;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

function Header() {
  return (
    <HeaderStyled>
      <Logo href="/">
        <LogoDefault src={logoDefault}>
        {/* {"< GuiScript />"} */}
        </LogoDefault>
        <LogoHover  src={logoHover}>
          {/* <PinkUnderline>{"<"}</PinkUnderline>
          {" GuiScript "}
          <GreenUnderline>{"/"}</GreenUnderline>
          <PurpleUnderline>{">"}</PurpleUnderline> */}
        </LogoHover>
      </Logo>
      <Menu />
    </HeaderStyled>
  ); 
}

export default Header;
