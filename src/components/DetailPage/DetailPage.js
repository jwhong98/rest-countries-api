import React from "react";

const DetailPage = (props) => {
  return (
    <DetailContainer>
      <DetailWrapper>
        <BackBtn></BackBtn>
        <InfoContainer>
          <InfoImgWrap>
            <InfoImg />
          </InfoImgWrap>
          <CountryInfoWrap>
            <Name></Name>
            <Info></Info>
            <Borders></Borders>
          </CountryInfoWrap>
        </InfoContainer>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default DetailPage;
