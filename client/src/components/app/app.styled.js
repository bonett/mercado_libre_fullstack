import React from "react";
import styled, { css } from "styled-components";

export const AppSection = styled(({ ...rest }) => <div {...rest} />)`
  ${() => css``}
`;
AppSection.displayName = "AppSection";
