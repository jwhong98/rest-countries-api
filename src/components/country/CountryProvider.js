import React, { useState } from "react";
import CountryContext from "./country-context";

const CountryProvider = (props) => {
  //   const countryContext = {
  //     flag: "",
  //     name: "",
  //     nativeName: "",
  //     population: "",
  //     region: "",
  //     subRegion: "",
  //     capital: "",
  //     tld: "", //array
  //     currencies: "", //array
  //     languages: "", //array
  //     borders: "",
  //   };
  const [context, setContext] = useState({
    flag: "",
    name: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    tld: "", //array
    currencies: "", //array
    languages: "", //array
    borders: "",
  });
  return (
    <CountryContext.Provider value={[context, setContext]}>
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
