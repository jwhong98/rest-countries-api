import styled from "styled-components";

export const DetailContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 20px;
  font-size: 16px;
  position: relative;
  z-index: 120;
`;

export const DetailWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
`;

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 110px;
  font-weight: 600;
  padding: 0.5rem 1.75rem;
  border: none;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 8px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  margin-top: 5rem;
`;

export const InfoImgWrap = styled.div`
  width: 100%;
`;

export const InfoImg = styled.img`
  width: 100%;
  height: auto;
`;

export const CountryInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Name = styled.h1`
  font-size: 2rem;
`;

export const Info = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  flex-wrap: wrap;

  margin-bottom: 1rem;
`;

export const Category = styled.p``;

export const Label = styled.span`
  font-weight: 600;
`;

export const Borders = styled.div``;
