import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { animateScroll } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";
import { ParallaxProvider } from "react-scroll-parallax";
import useToTop from "../hooks/useToTop";
import useSiteMetadata from "../hooks/useSiteMetadata";
import Head from "../components/head";
import PageNav from "../components/page-nav";
import Footer from "../components/footer";
import "../theme/global.scss";
import theme from "../theme/theme";

const ToTop = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 20px;
  padding-top: 5px;
  text-align: center;
  cursor: pointer;
  opacity: 0;
  transition: all 1s ease-in-out;

  &.isVisible {
    opacity: 1;
  }

  svg {
    width: 24px;
    height: auto;
  }
`;

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();
  const toTopIsVisible = useToTop();
  const targets = [
    "about",
    "mission",
    "approach",
    "story",
    "leadership",
    "communities",
  ];

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Head metaData={siteMetadata} />
        <PageNav targets={targets} />
        {children}
        <Footer />
        <ToTop
          className={toTopIsVisible ? "isVisible" : null}
          type="button"
          onClick={() => animateScroll.scrollToTop()}
        >
          <FiArrowUp />
        </ToTop>
      </ParallaxProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
