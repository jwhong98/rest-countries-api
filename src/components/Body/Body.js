import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

import {
  BodyContainer,
  BodyWrap,
  Filters,
  FilterInput,
  CountryDisplay,
} from "./BodyElements";
import DropDown from "./DropDown";

const Body = (props) => {
  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
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
        nativeName={info.nativeName}
        subRegion={info.subregion}
        tld={info.topLevelDomain} //array
        currencies={info.currencies} //array
        languages={info.languages} //array
        borders={info.borders}
        clickHandler={props.clickHandler}
      />
    );
  };

  const nameChangeHandler = (e) => {
    setNameFilter(e.target.value);
  };

  const regionChangeHandler = (filter) => {
    let filteredCountries = countries.filter(
      (country) => country.region === filter
    );
    setCountries(filteredCountries);
  };

  // const filterByName = (filteredData) => {
  //   if (!nameFilter) {
  //     return filteredData;
  //   }
  //   const filteredCountries = filteredData.filter(
  //     (country) => country.name.split("").indexOf(nameFilter) !== -1
  //   );
  //   setCountries(filteredCountries);
  // };

  // const filterByRegion = (filteredData) => {
  //   if (!regionFilter) {
  //     return filteredData;
  //   }

  //   const filteredCountries = filteredData.filter(
  //     (country) => country.region === regionFilter
  //   );
  //   return filteredCountries;
  // };

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
            <FilterInput
              placeholder="Search for a country..."
              onChange={nameChangeHandler}
            />
            <DropDown onFilter={regionChangeHandler} />
          </Filters>
          <CountryDisplay>{countries.map(createCard)}</CountryDisplay>
        </BodyWrap>
      </BodyContainer>
    );
  }
};

export default Body;
