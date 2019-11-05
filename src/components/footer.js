import React from "react";
import styled from "@emotion/styled";
import useSiteMetadata from "../hooks/useSiteMetadata";
import Container from "./container";

const SiteFooter = styled.footer`
  padding: 50px 30px;
  text-align: center;
  background-color: #9ed9f5;
  color: #fff;
`;

const Footer = () => {
  const { copyright } = useSiteMetadata();
  return (
    <SiteFooter>
      <p>
        For more information, please contact{" "}
        <a href="mailto: susan@aiandyou.org">susan@aiandyou.org</a>
      </p>
      <p>{copyright}</p>
    </SiteFooter>
  );
};

export default Footer;
