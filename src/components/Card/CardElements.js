import styled from "styled-components";

export const CardContainer = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 250px;
  height: 350px;
  border-radius: 5px;
  color: hsl(200, 15%, 8%);
`;

export const ImgWrap = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: auto;
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
  padding: 1rem;
  gap: 0.25rem;
`;

export const Country = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
`;

export const Stat = styled.p``;

export const Label = styled.span`
  font-weight: 600;
`;
