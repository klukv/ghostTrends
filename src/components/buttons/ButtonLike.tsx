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
  colorLiked,
  backgroundColorLiked,
  borderRadiusLiked,
  positionTopStart,
  positionBottomStart,
  positionRightStart,
  positionTopEnd,
  positionBottomEnd,
  positionRightEnd,
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
      colorLiked={colorLiked}
      backgroundColorLiked={backgroundColorLiked}
      borderRadiusLiked={borderRadiusLiked}
      positionTopStart={positionTopStart}
      positionBottomStart={positionBottomStart}
      positionRightStart={positionRightStart}
      positionTopEnd={positionTopEnd}
      positionBottomEnd={positionBottomEnd}
      positionRightEnd={positionRightEnd}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonLike;
