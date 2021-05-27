import React from "react";

import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderSubtitle,
  HeaderContact,
  GithubLogin,
} from "./";
import { config } from "../../config";

export const Header = () => {
  return (
    <HeaderContainer>
      <GithubLogin isAbsolute={true} />
      <HeaderWrapper>
        <HeaderTitle>{config.title}</HeaderTitle>
        <HeaderSubtitle>{config.subtitle}</HeaderSubtitle>
        <HeaderContact>{config.contact}</HeaderContact>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
