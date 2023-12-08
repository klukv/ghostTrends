import React, { useState } from "react";

import { IPropsButtonLike } from "../../const/types";

import AbstractButton from "../../abstract/Button/AbstractButton";

const ButtonLike: React.FC<IPropsButtonLike> = ({ children, onClick }) => {
  return <AbstractButton onClick={onClick}>{children}</AbstractButton>;
};

export default ButtonLike;
