import React from "react";
import styled, { css } from "styled-components";

export const NavbarContent = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.yellow};
    box-shadow: ${theme.shadow.box};
    padding: 8px 0;
  `}
`;

export const Container = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css``}
`;

export const NavbarWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css``}
`;

export const LogoWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css``}
`;

export const FormWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css``}
`;

NavbarContent.displayName = "NavbarContent";
Container.displayName = "Container";
NavbarWrapper.displayName = "NavbarWrapper";
LogoWrapper.displayName = "LogoWrapper";
FormWrapper.displayName = "FormWrapper";
