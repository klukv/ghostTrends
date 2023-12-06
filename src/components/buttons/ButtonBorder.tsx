import React, { PropsWithChildren, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const ButtonBorder: React.FC<PropsWithChildren<IChildren>> = ({ children }) => {
  return <div>{children}</div>;
};

export default ButtonBorder;
