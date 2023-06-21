import { FC, ReactNode } from "react";
import { TCounter } from "../../App";
import s from "./Display.module.css";

type TDisplayProps = {
  counter: TCounter;
  children: ReactNode;
};

export const Display: FC<TDisplayProps> = ({ counter, children }) => {
  const displayClass =
    counter.currentValue === counter.maxValue
      ? `${s.display} ${s.max}`
      : s.display;

  return <div className={displayClass}>{children}</div>;
};
