import React from "react";
import styled, { css } from "styled-components";

export const ProductListContent = styled(({ ...rest }) => <div {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.white};
    padding: 0;
    margin: 7px 0;
  `}
`;

ProductListContent.displayName = "ProductListContent";
