import React, { useContext } from "react";
import {
  DetailContainer,
  DetailWrapper,
  BackBtn,
  InfoContainer,
  InfoImgWrap,
  InfoImg,
  CountryInfoWrap,
  Name,
  Info,
  Category,
  Label,
  Borders,
} from "./DetailPage.Elements";
import CountryContext from "../country/country-context";

const DetailPage = (props) => {
  const [context, setContext] = useContext(CountryContext);
  const onClickHandler = () => {
    console.log(context);
  };
  return (
    <DetailContainer>
      <DetailWrapper onClick={onClickHandler}>
        <BackBtn onClick={props.clickHandler}>
          <ion-icon name="arrow-back-outline"></ion-icon>Back
        </BackBtn>
        <InfoContainer>
          <InfoImgWrap>
            <InfoImg src={context.flag} />
          </InfoImgWrap>
          <CountryInfoWrap>
            <Name>{context.name}</Name>
            <Info>
              <Category>
                <Label>Native Name: </Label>
                {context.nativeName}
              </Category>
              <Category>
                <Label>Population: </Label>
                {context.population}
              </Category>
              <Category>
                <Label>Region: </Label>
                {context.region}
              </Category>
              <Category>
                <Label>Sub Region: </Label>
                {context.subRegion}
              </Category>
              <Category>
                <Label>Capital: </Label>
                {context.capital}
              </Category>
              <Category>
                <Label>Top Level Domain: </Label>
                {context.tld}
              </Category>
              <Category>
                <Label>Currencies: </Label>
                {context.currencies}
              </Category>
              <Category>
                <Label>Languages: </Label>
                {context.languages}
              </Category>
            </Info>
            <Borders>
              <Label>Border Countries: </Label>
              {context.borders}
            </Borders>
          </CountryInfoWrap>
        </InfoContainer>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailPage;
