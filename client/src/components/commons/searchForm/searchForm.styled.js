import React from "react";
import styled, { css } from "styled-components";

export const SearchForm = styled(({ ...rest }) => <form {...rest} />)`
  ${() => css`
    padding: 4px 0;
    position: relative;
    width: 100%;
  `}
`;

SearchForm.displayName = "SearchForm";
