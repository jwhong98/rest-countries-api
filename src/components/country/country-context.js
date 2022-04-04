import React from "react";

const CountryContext = React.createContext({
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

export default CountryContext;
