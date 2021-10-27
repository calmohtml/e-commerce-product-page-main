import React from "react";
import styled from "styled-components";

const Footer = () => {
  const Footer = styled.footer`
    position: absolute;
    bottom: 0%;
  `;
  return (
    <Footer className="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://calmohtml.vercel.app/">@calmohtml</a>.
    </Footer>
  );
};

export default Footer;
