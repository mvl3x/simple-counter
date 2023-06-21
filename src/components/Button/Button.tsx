import { FC, ReactNode } from "react";
import s from "./Button.module.css";

type TButtonProps = {
  handleClick: () => void;
  disabled: boolean;
  children: ReactNode;
};

export const Button: FC<TButtonProps> = ({
  handleClick,
  disabled,
  children,
}) => {
  return (
    <button className={s.button} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};
