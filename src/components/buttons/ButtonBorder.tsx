import React from "react";
import { IPropsWithChildren } from "../../const/types";
import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonBorder: React.FC<IPropsWithChildren> = ({
  children,
  isBorder,
  borderSize,
  borderColor,
  borderRadius,
}) => {
  return (
    <AbstractButton
      isBorder= {isBorder}
      borderSize={borderSize}
      borderColor={borderColor}
      borderRadius={borderRadius}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonBorder;
