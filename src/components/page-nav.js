import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as SmoothScrollLink } from "react-scroll";
import styled from "@emotion/styled";
import logoSrc from "../images/aiandyou-logo.png";
import Hamburger from "./hamburger";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: ${props => props.theme.headerNavHeight};
  padding: 10px 30px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 767px) {
    padding: 10px 15px;
  }

  ul {
    list-style: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 320px;
    height: 450px;
    background-color: #9ed9f5;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 50px 0 0;
    margin-top: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &.active {
      opacity: 1;
      margin-top: -20px;
    }
  }

  li {
    padding: 10px 20px;
    text-transform: uppercase;

    a {
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;

      &.active {
        color: #999;
        cursor: default;
      }
    }
  }
`;

const Logo = styled.div`
  position: fixed;
  top: 10px;
  left: 30px;
  z-index: 1002;
  width: 240px;

  @media (max-width: 767px) {
    left: 15px;
    width: 200px;
  }
`;

const PageNav = ({ targets }) => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!showMobileMenu);
  };

  return (
    <NavBar>
      <Logo>
        <img src={logoSrc} alt="logo" />
      </Logo>
      <nav>
        <Hamburger
          className={showMobileMenu ? "active" : null}
          onClick={toggleMobileMenu}
        >
          <span />
        </Hamburger>
        <ul className={showMobileMenu ? "active" : null}>
          {targets.map(target => (
            <li key={target}>
              <SmoothScrollLink
                onClick={toggleMobileMenu}
                activeClass="active"
                to={target}
                spy
                smooth
                offset={-100}
                duration={500}
              >
                {target}
              </SmoothScrollLink>
            </li>
          ))}
        </ul>
      </nav>
    </NavBar>
  );
};
export default PageNav;

PageNav.propTypes = {
  targets: PropTypes.arrayOf(PropTypes.string).isRequired,
};
