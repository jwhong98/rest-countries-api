import React, { useState } from "react";
import {
  DropContainer,
  DropBtn,
  DropMenu,
  MenuItem,
} from "./DropDown.Elements";

const DropDown = (props) => {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("Filter by Region");

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const onClickHandler = (e) => {
    let filter = e.target.attributes.getNamedItem("data-value").value;
    setSelect(e.target.textContent);
    props.onFilter(filter);
    toggleHandler();
  };
  return (
    <DropContainer>
      <DropBtn onClick={toggleHandler}>
        {select}
        <ion-icon name="chevron-down-outline"></ion-icon>
      </DropBtn>
      {toggle ? (
        <DropMenu>
          <MenuItem data-value="Africa" onClick={onClickHandler}>
            Africa
          </MenuItem>
          <MenuItem data-value="Americas" onClick={onClickHandler}>
            America
          </MenuItem>
          <MenuItem data-value="Asia" onClick={onClickHandler}>
            Asia
          </MenuItem>
          <MenuItem data-value="Europe" onClick={onClickHandler}>
            Europe
          </MenuItem>
          <MenuItem data-value="Oceania" onClick={onClickHandler}>
            Oceania
          </MenuItem>
        </DropMenu>
      ) : (
        ""
      )}
    </DropContainer>
  );
};

export default DropDown;
