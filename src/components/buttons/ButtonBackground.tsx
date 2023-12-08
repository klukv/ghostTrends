import React from "react";
import { IPropsWithChildren } from "../../const/types";
import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonBackground: React.FC<IPropsWithChildren> = ({
  children,
  padding,
  isBackground,
  backgroundColor,
  borderRadius,
  fontWeight,
  hoverBackground,
}) => {
  return (
    <AbstractButton
      padding={padding}
      isBackground={isBackground}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      hoverBackground={hoverBackground}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonBackground;
