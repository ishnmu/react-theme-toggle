import React from "react";
import { func, string } from "prop-types";
import { ToggleContainer } from "./Toggle.styled";
import { ReactComponent as Night } from "./icons/night.svg";
import { ReactComponent as Sun } from "./icons/sun.svg";

const Toggle = ({ onClick, theme }) => {
  const isLight = theme === "light";
  return (
    <ToggleContainer onClick={onClick} lightTheme={isLight}>
      <Sun />
      <Night />
    </ToggleContainer>
  );
};

Toggle.prototypes = {
  onClick: func.isRequired,
  theme: string.isRequired,
};

export default Toggle;
