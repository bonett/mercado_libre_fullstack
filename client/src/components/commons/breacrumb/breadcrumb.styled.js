import React from "react";
import styled, { css } from "styled-components";

export const BreadcrumbContent = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css`
    margin: 7px 0;
  `}
`;

export const BreadcrumbList = styled(({ ...rest }) => <ul {...rest} />)`
  ${() => css`
    padding: 4px 0;
  `}
`;

export const BreadcrumbItem = styled(({ ...rest }) => <li {...rest} />)`
  ${({ theme }) => css`
    color: ${theme.color.gray};
    cursor: pointer;
    display: inline;
    font-size: 14px;
    font-weight: 400;
    margin-right: 10px;
    text-transform: capitalize;
    pointer-events: auto;

    &:after {
      content: ">";
      margin-left: 10px;
    }

    &:last-child {
      color: ${theme.color.plate};
      font-weight: 800 !important;
      pointer-events: none;

      &:after {
        content: "";
      }
    }
  `}
`;

BreadcrumbContent.displayName = "BreadcrumbContent";
BreadcrumbList.displayName = "BreadcrumbList";
BreadcrumbItem.displayName = "BreadcrumbItem";
