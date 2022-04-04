import React, { useContext } from "react";
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
import CountryContext from "../country/country-context";

const Card = (props) => {
  const [context, setContext] = useContext(CountryContext);
  const clickHandler = () => {
    setContext({
      flag: props.flag,
      name: props.name,
      nativeName: props.nativeName,
      population: props.population,
      region: props.region,
      subRegion: props.subRegion,
      capital: props.capital,
      tld: props.topLevelDomain, //array
      currencies: props.currencies[0].name, //array
      // languages: props.languages, //array
      borders: props.borders,
    });
    props.clickHandler();
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
