import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display/Display";
import { Button } from "./components/Button/Button";

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

  const handleCLickInc = () => {
    setCounter({ ...counter, currentValue: counter.currentValue + 1 });
  };

  const handleClickReset = () => {
    setCounter({ ...counter, currentValue: counter.minValue });
  };

  const isCurrentLesThanMax = counter.currentValue >= counter.maxValue;
  const isCurrentGreaterThanMin = counter.currentValue <= counter.minValue;

  return (
    <div className="App">
      <Display>{counter.currentValue}</Display>
      <Button handleClick={handleCLickInc} disabled={isCurrentLesThanMax}>
        inc
      </Button>
      <Button handleClick={handleClickReset} disabled={isCurrentGreaterThanMin}>
        reset
      </Button>
    </div>
  );
}

export default App;
