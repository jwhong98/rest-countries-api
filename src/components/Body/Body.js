import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
// import Dropdown from "react-bootstrap/Dropdown";
import {
  BodyContainer,
  BodyWrap,
  Filters,
  FilterInput,
  CountryDisplay,
  // StyledDropDown,
} from "./BodyElements";
import DropDown from "./DropDown";

const Body = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
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
      />
    );
  };

  const filterChangeHandler = (filter) => {
    console.log(filter);
    setFilter(filter);
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
            <FilterInput
              placeholder="Search for a country..."
              onChange={filterChangeHandler}
            />
            <DropDown onFilter={filterChangeHandler} />
            {/* <StyledDropDown className="d-inline mx-2">
              <StyledDropDown.Toggle id="dropdown-autoclose-true">
                Filter by Region
              </StyledDropDown.Toggle>

              <StyledDropDown.Menu>
                <StyledDropDown.Item href="#">Africa</StyledDropDown.Item>
                <StyledDropDown.Item href="#">America</StyledDropDown.Item>
                <StyledDropDown.Item href="#">Asia</StyledDropDown.Item>
                <StyledDropDown.Item href="#">Europe</StyledDropDown.Item>
                <StyledDropDown.Item href="#">Oceania</StyledDropDown.Item>
              </StyledDropDown.Menu>
            </StyledDropDown> */}
          </Filters>
          <CountryDisplay>{countries.map(createCard)}</CountryDisplay>
        </BodyWrap>
      </BodyContainer>
    );
  }
};

export default Body;
