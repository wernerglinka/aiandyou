import React from "react";
import useSiteMetadata from "../hooks/useSiteMetadata";

const Footer = () => {
  const { copyright } = useSiteMetadata();
  return (
    <footer>
      <p>{copyright}</p>
    </footer>
  );
};

export default Footer;
