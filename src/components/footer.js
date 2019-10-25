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
      <p>{copyright}</p>
    </SiteFooter>
  );
};

export default Footer;
