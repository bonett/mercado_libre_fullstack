import React from "react";
import styled, { css } from "styled-components";

export const Container = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    &.container {
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }

    @media (min-width: 768px) {
      &.container {
        width: 750px;
      }
    }

    @media (min-width: 992px) {
      &.container {
        width: 970px;
      }
    }

    @media (min-width: 1200px) {
      &.container {
        width: 1170px;
      }
    }
  `}
`;

Container.displayName = "Container";
