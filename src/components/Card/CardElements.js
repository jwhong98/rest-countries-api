import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 265px;
  height: 320px;
  border-radius: 5px;
  color: hsl(200, 15%, 8%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 5px;
  cursor: pointer;
`;

export const ImgWrap = styled.div`
  height: 150px;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 0.25rem;
`;

export const Country = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

export const Stat = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

export const Label = styled.span`
  font-weight: 800;
`;
