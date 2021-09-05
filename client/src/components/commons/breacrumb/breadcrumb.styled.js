import React from "react";
import styled, { css } from "styled-components";

export const BreadcrumbContent = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;
BreadcrumbContent.displayName = "BreadcrumbContent";
