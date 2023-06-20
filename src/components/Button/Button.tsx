import { FC, ReactNode } from "react";

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
    <button onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};
