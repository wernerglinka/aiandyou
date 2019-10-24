import React from "react";
import PropTypes from "prop-types";
import { Link as SmoothScrollLink } from "react-scroll";
import styled from "@emotion/styled";
import logoSrc from "../images/aiandyou-logo.png";

const NavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
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
    right: 20px;
    top: 30px;
  }

  li {
    display: inline-block;
    padding: 0 20px;
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
  width: 240px;
`;

const PageNav = ({ targets }) => {
  return (
    <NavBar>
      <Logo>
        <img src={logoSrc} alt="logo" />
      </Logo>
      <nav>
        <ul>
          {targets.map(target => (
            <li key={target}>
              <SmoothScrollLink
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
