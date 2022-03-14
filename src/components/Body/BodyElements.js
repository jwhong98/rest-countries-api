import styled from "styled-components";

export const BodyContainer = styled.body`
  background: hsl(0, 0%, 98%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BodyWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 0;
`;

export const Filters = styled.div``;

export const FilterInput = styled.input``;

export const FilterRegion = styled.div``;

export const CountryDisplay = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
`;
