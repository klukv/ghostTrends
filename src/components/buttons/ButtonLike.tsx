import React from "react";

import { IPropsButtonLike } from "../../const/types";

import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonLike: React.FC<IPropsButtonLike> = ({
  children,
  onClick,
  isLiked,
  padding,
  fontWeight,
  isBackground,
  hoverBackground,
  backgroundColor,
  borderRadius,
  colorClicked,
  backgroundColorClicked,
  borderRadiusLiked,
}) => {
  return (
    <AbstractButton
      onClick={onClick}
      isLiked={isLiked}
      padding={padding}
      fontWeight={fontWeight}
      isBackground={isBackground}
      hoverBackground={hoverBackground}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      colorClicked={colorClicked}
      backgroundColorClicked={backgroundColorClicked}
      borderRadiusLiked={borderRadiusLiked}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonLike;
