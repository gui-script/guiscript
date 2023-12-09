import React, { useState } from "react";
import styled from "styled-components";
import { Squash as Hamburger } from "hamburger-react";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contato";
import Resume from "../Resume/Resume";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Links = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  list-style: none;
  display: flex;
  color: #fcfcfc;
`;

const PinkUnderline = styled.span`
  color: #d966c1;
`;

const PurpleUnderline = styled.span`
  color: #b455ff;
`;

const GreenUnderline = styled.span`
  color: #66d994;
`;

const Nav = styled.nav`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  button {
    color: black;
    text-decoration: none;
    font-family: sans-serif;
    display: none;

    @media (max-width: 768px) {
      display: flex;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      border: none;
      background: none;
      cursor: pointer;
      gap: 0.5rem;
    }
  }

  ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;

    @media (max-width: 768px) {
      display: block;
      position: absolute;
      width: 100vw;
      top: 14vh;
      right: 0;
      background: #1c1c1c;
      transition: 0.2s;
      z-index: 1000;
      height: 0;
      border-radius: 0 0 20px 20px;
      visibility: hidden;
      overflow-y: hidden;

      ${({ active }) =>
        active &&
        `
      height: 50vh;
      visibility: visible;
      overflow-y: auto;
    `}
    }
  }

  li {
    @media (max-width: 768px) {
      padding: 1rem 0;
      margin: 0 1rem;
  }

  a {
    display: block;
    padding: 0.5rem;
    color: #fcfcfc;
    text-decoration: none;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    @media (max-width: 768px) {
      padding: 1rem 0;
      margin: 0 1rem;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
`;

const Menu = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMenu = () => {
    setMobileMenuActive(!isMobileMenuActive);
  };

  return (
    // <BrowserRouter>
    <Nav id="nav" active={isMobileMenuActive}>
      <MobileMenuButton
        onClick={toggleMenu}
        aria-expanded={isMobileMenuActive}
        aria-label={isMobileMenuActive ? "Fechar Menu" : "Abrir Menu"}
      >
        <Hamburger rounded color="#fcfcfc" toggled={isMobileMenuActive} />
      </MobileMenuButton>
      <ul id="menu" role="menu">
        <li>
          {/* <Links to="/inicio"> */}
          Inicio<PinkUnderline>_</PinkUnderline>
          {/* </Links> */}
        </li>
        <li>
          {/* <Links to="/sobre"> */}
          Sobre<PurpleUnderline>_</PurpleUnderline>
          {/* </Links> */}
        </li>
        <li>
          {/* <Links to="/projetos"> */}
          Projetos<GreenUnderline>_</GreenUnderline>
          {/* </Links> */}
        </li>
        <li>
          {/* <Links to="/contato"> */}
          Contato<PurpleUnderline>_</PurpleUnderline>
          {/* </Links> */}
        </li>
        <li>
          {/* <Links to="/resume"> */}
          Resume<PinkUnderline>_</PinkUnderline>
          {/* </Links> */}
        </li>
      </ul>
    </Nav>

    /* <Routes>
        <Route path="/" element={<Inicio />} />

        <Route path="/sobre" element={<Sobre />} />

        <Route path="/projetos" element={<Projetos />} />

        <Route path="/contato" element={<Contato />} />

        <Route path="/resume" element={<Resume />} />
      </Routes> */
    /* </BrowserRouter> */
  );
};

export default Menu;
