import React from "react";
import styled, { css } from "styled-components";

export const Button = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background: none;
    border: none;

    img {
      height: 44px;
    }
  `}
`;

Button.displayName = "Button";
