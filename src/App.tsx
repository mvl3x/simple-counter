import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display/Display";
import { Button } from "./components/Button/Button";

export type TCounter = {
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

  const handleCLickInc = () => {
    setCounter((prev) => ({ ...prev, currentValue: prev.currentValue + 1 }));
  };

  const handleClickReset = () => {
    setCounter((prev) => ({ ...prev, currentValue: prev.minValue }));
  };

  const isCurrentLesThanMax = counter.currentValue >= counter.maxValue;
  const isCurrentGreaterThanMin = counter.currentValue <= counter.minValue;

  return (
    <div className="wrapper">
      <div className="App">
        <Display counter={counter}>{counter.currentValue}</Display>
        <div className="buttons">
          <Button handleClick={handleCLickInc} disabled={isCurrentLesThanMax}>
            inc
          </Button>
          <Button
            handleClick={handleClickReset}
            disabled={isCurrentGreaterThanMin}
          >
            reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
