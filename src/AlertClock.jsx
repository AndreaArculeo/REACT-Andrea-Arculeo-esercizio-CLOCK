import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const messages = {
  en: "Current time is",
  it: "L'ora attuale è",
};

export default function AlertClock() {
  const { language } = useContext(LanguageContext);

  function handleButtonClick() {
    const actualTime = new Date();
    alert(`${messages[language]} ${actualTime.toLocaleTimeString()}`);
  }

  return <button onClick={handleButtonClick}>Show</button>;
}
