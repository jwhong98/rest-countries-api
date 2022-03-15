// import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const BodyContainer = styled.section`
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

export const Filters = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FilterInput = styled.input`
  width: 490px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: url(../../assets/search-outline.svg) no-repeat left;

  ::placeholder {
    font-weight: 600;
    color: hsl(0, 0%, 52%);
  }
`;

// export const StyledDropDown = styled(Dropdown)``;

export const FilterRegion = styled.div``;

export const CountryDisplay = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  padding: 0;
`;
