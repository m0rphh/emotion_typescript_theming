import React from "react";
import { StyledButton, StyledLabel } from "./styled";
import { withTheme } from "@emotion/react";

export interface ButtonProps {
  children: HTMLElement | string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <>
      <StyledLabel>Label</StyledLabel>
      <StyledButton>{children}</StyledButton>
    </>
  );
};

export default withTheme(Button);
