import { FC, ReactNode } from "react";

type TDisplayProps = {
  children: ReactNode;
};

export const Display: FC<TDisplayProps> = ({ children }) => {
  return <div>{children}</div>;
};
