import React from "react";
import { StyledFooter } from "./footer.styled";
import logo from "../../assets/ZL-LOGO.svg";

function Footer() {
  return (
    <StyledFooter>
      <a href="https://zentrixlab.eu/">
        <img src={logo} alt="" />
      </a>
    </StyledFooter>
  );
}

export default Footer;
