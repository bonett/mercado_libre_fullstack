import React from "react";
import styled, { css } from "styled-components";

export const Button = styled(({ ...rest }) => <button {...rest} />)`
  ${({ theme }) => css`
    background: none;
    border: none;
    padding-left: 0;

    img {
      height: 44px;
    }

    @media screen and (max-width: ${theme.maxScreen.xs}) {
      padding-left: 4px;
    }
  `}
`;

Button.displayName = "Button";
