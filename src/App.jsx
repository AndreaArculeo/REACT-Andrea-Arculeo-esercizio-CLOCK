import { useState } from "react";
import "./App.css";
import AlertClock from "./AlertClock";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <AlertClock />
      </div>
    </>
  );
}

export default App;
