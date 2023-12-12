import React from "react";
import { IPropsWithChildren } from "../../const/types";
import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonBackground: React.FC<IPropsWithChildren> = ({
  children,
  styleBase,
  isBackground,
  backgroundColor,
  borderRadius,
  hoverBackground,
}) => {
  return (
    <AbstractButton
      styleBase={{
        padding: styleBase?.padding,
        fontWeight: styleBase?.fontWeight,
      }}
      isBackground={isBackground}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      hoverBackground={hoverBackground}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonBackground;
