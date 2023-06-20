import { useState } from "react";
import "./App.css";
import { Display } from "./components/display/Display";

type TCounter = {
  currentValue: number;
  minValue: number;
  maxValue: number;
};

function App() {
  const [counter, setCounter] = useState<TCounter>({
    currentValue: 0,
    minValue: 0,
    maxValue: 10,
  });

  return (
    <div className="App">
      <Display>{counter.currentValue}</Display>
      <button
        onClick={() =>
          setCounter({ ...counter, currentValue: counter.currentValue + 1 })
        }
        disabled={counter.currentValue === counter.maxValue}
      >
        inc
      </button>
      <button
        onClick={() =>
          setCounter({ ...counter, currentValue: counter.minValue })
        }
        disabled={counter.currentValue === counter.minValue}
      >
        reset
      </button>
    </div>
  );
}

export default App;
