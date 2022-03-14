import React from "react";
import {
  CardContainer,
  ImgWrap,
  Img,
  TextContainer,
  TextWrap,
  Country,
  Stat,
  Label,
} from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <ImgWrap>
        <Img src={props.flag} />
      </ImgWrap>
      <TextContainer>
        <TextWrap>
          <Country>{props.name}</Country>
          <Stat>
            <Label>Population: </Label>
            {props.population}
          </Stat>
          <Stat>
            <Label>Region: </Label>
            {props.region}
          </Stat>
          <Stat>
            <Label>Capital: </Label>
            {props.capital}
          </Stat>
        </TextWrap>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
