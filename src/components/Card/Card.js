import React from "react";
import DetailPage from "../DetailPage/DetailPage";
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
  const clickHandler = () => {
    console.log(
      <DetailPage
        flag={props.flag}
        name={props.name}
        nativeName={props.nativeName}
        population={props.population}
        region={props.region}
        subRegion={props.subRegion}
        capital={props.capital}
      />
    );
    return (
      <DetailPage
        flag={props.flag}
        name={props.name}
        nativeName={props.nativeName}
        population={props.population}
        region={props.region}
        subRegion={props.subRegion}
        capital={props.capital}
      />
    );
  };
  return (
    <CardContainer onClick={clickHandler}>
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
