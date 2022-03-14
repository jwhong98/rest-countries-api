import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import {
  BodyContainer,
  BodyWrap,
  Filters,
  FilterInput,
  FilterRegion,
  CountryDisplay,
} from "./BodyElements";

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const createCard = (info) => {
    return (
      <Card
        key={info.alpha2Code}
        flag={info.flags.png}
        name={info.name}
        population={info.population}
        region={info.region}
        capital={info.capital}
      />
    );
  };

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCountries(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <BodyContainer>
        <BodyWrap>
          <Filters>
            <FilterInput></FilterInput>
            <FilterRegion></FilterRegion>
          </Filters>
          <CountryDisplay>{countries.map(createCard)}</CountryDisplay>
        </BodyWrap>
      </BodyContainer>
    );
  }
};

export default Body;
