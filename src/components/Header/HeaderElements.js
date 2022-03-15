import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 0 20px;
  box-shadow: 0 5px 2px -2px rgba(133, 133, 133, 0.1);
  position: relative;
  z-index: 99;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 800;
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;

export const Mode = styled.p`
  font-weight: 800;
  color: hsl(200, 15%, 8%);
`;
