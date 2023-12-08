import React from "react";
import { IPropsWithChildren } from "../../const/types";
import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonBackground: React.FC<IPropsWithChildren> = ({
  children,
  isBackground,
  backgroundColor,
  borderRadius,
  fontWeight,
}) => {
  return (
    <AbstractButton
      isBackground={isBackground}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonBackground;
