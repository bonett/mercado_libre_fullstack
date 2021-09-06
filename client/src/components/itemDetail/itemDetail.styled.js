import React from "react";
import styled, { css } from "styled-components";

export const ItemDetailSection = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

export const BreadcrumbWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

export const ItemDetailDescription = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;

ItemDetailSection.displayName = "ItemDetailSection";
BreadcrumbWrapper.displayName = "BreadcrumbWrapper";
ItemDetailDescription.displayName = "ItemDetailDescription";
