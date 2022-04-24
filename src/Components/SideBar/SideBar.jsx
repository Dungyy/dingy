import React from "react";
import {
  SideBarContainer,
  Icon,
  ClosedIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideButtonWrap,
  SideBarRoute,
} from "./SideBarStyles";

const SideBarStyles = () => {
  return (
    <SideBarContainer>
      <Icon>
        <ClosedIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about">About</SideBarLink>
          <SideBarLink to="crypto">Crypto</SideBarLink>
          <SideBarLink to="contact">contact</SideBarLink>
          <SideBarLink to="signup">Sign Up</SideBarLink>
        </SideBarMenu>
        <SideButtonWrap>
          <SideBarRoute to="/signin">Sign In</SideBarRoute>
        </SideButtonWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBarStyles;
