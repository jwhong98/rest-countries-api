import styled from "styled-components";

export const DropContainer = styled.div`
  width: 200px;
  position: relative;
`;

export const DropBtn = styled.button`
  width: 100%;
  padding: 1rem 0.75rem 1rem 1.5rem;
  border: none;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  cursor: pointer;
`;

export const DropMenu = styled.ul`
  list-style: none;
  background: #fff;
  padding: 1rem;
  position: absolute;
  width: 100%;
  top: 3.35rem;
  border-radius: 5px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;
