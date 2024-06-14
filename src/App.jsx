import { useState, useContext } from "react";
import "./App.css";
import AlertClock from "./AlertClock";
import { LanguageContext, LanguageProvider } from "./LanguageContext";

function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
    </select>
  );
}

function App() {
  return (
    <LanguageProvider>
      <LanguageSelector />
      <AlertClock />
    </LanguageProvider>
  );
}

export default App;
