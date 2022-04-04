import "./App.css";
import React, { useState } from "react";
import Body from "./components/Body/Body";
import DetailPage from "./components/DetailPage/DetailPage";
import Header from "./components/Header/Header";
import CountryProvider from "./components/country/CountryProvider";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CountryProvider>
      <Header />
      {!isOpen && <Body clickHandler={clickHandler} />}
      {isOpen && <DetailPage clickHandler={clickHandler} />}
    </CountryProvider>
  );
}

export default App;
