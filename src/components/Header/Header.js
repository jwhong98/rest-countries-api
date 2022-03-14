import React from "react";
import {
  HeaderContainer,
  HeaderWrap,
  Title,
  ThemeSwitch,
  Mode,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <Title>Where in the world?</Title>
        <ThemeSwitch>
          <ion-icon name="moon-outline"></ion-icon>
          <Mode>Dark Mode</Mode>
        </ThemeSwitch>
      </HeaderWrap>
    </HeaderContainer>
  );
};

export default Header;
