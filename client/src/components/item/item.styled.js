import React from "react";
import styled, { css } from "styled-components";

export const ItemSection = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

export const BreadcrumbWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

export const ListWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

BreadcrumbWrapper.displayName = "BreadcrumbWrapper";
ItemSection.displayName = "ItemSection";
ListWrapper.displayName = "ListWrapper";
