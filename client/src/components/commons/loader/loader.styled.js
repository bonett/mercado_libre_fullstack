import React from "react";
import styled, { css } from "styled-components";

export const LoaderContent = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;
LoaderContent.displayName = "LoaderContent";
