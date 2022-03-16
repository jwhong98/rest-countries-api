import React from "react";
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

const DetailPage = (props) => {
  return (
    <DetailContainer>
      <DetailWrapper>
        <BackBtn>
          <ion-icon name="arrow-back-outline"></ion-icon>Back
        </BackBtn>
        <InfoContainer>
          <InfoImgWrap>
            <InfoImg src={props.flag} />
          </InfoImgWrap>
          <CountryInfoWrap>
            <Name>{props.name}</Name>
            <Info>
              <Category>
                <Label>Native Name: </Label>
                {props.nativeName}
              </Category>
              <Category>
                <Label>Population: </Label>
                {props.population}
              </Category>
              <Category>
                <Label>Region: </Label>
                {props.region}
              </Category>
              <Category>
                <Label>Sub Region: </Label>
                {props.subRegion}
              </Category>
              <Category>
                <Label>Capital: </Label>
                {props.capital}
              </Category>
              <Category>
                <Label>Top Level Domain: </Label>
                {props.tld}
              </Category>
              <Category>
                <Label>Currencies: </Label>
              </Category>
              <Category>
                <Label>Languages: </Label>
              </Category>
            </Info>
            <Borders>borders</Borders>
          </CountryInfoWrap>
        </InfoContainer>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailPage;
