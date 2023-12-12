import React, { useEffect } from "react";

import AbstractButton from "../../abstract/Button/AbstractButton";
import { isBackgroundVariants } from "../../const/enums";
import {
  defaultBgColor,
  defaultBorderRadius,
  defaultBtnColor,
  likeBtnActiveBgColor,
  likeBtnActiveBorderRadius,
  likeBtnActiveColor,
  likeBtnHoverBgColor,
  setValuePosition,
} from "../../const/global";
import { IPropsButtonLike } from "../../const/types";

const ButtonLike: React.FC<IPropsButtonLike> = ({
  children,
  isLiked,
  padding,
  fontWeight,
  onClick,
}) => {
  return (
    <AbstractButton
      onClick={onClick}
      styleBase={{
        color: isLiked ? likeBtnActiveColor() : defaultBtnColor(),
        padding: padding,
        fontWeight: fontWeight,
      }}
      isBackground={isBackgroundVariants.EXIST_BACKGROUND_COLOR}
      backgroundColor={isLiked ? likeBtnActiveBgColor() : defaultBgColor()}
      borderRadius={
        isLiked ? likeBtnActiveBorderRadius() : defaultBorderRadius()
      }
      hoverBackground={likeBtnHoverBgColor()}
      stylesLikeBtn={setValuePosition(isLiked)}
    >
      {children}
    </AbstractButton>
  );
};

export default ButtonLike;
