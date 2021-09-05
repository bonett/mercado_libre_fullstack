import React from "react";
import styled, { css } from "styled-components";

export const Navbar = styled(({ ...rest }) => <nav {...rest} />)`
  ${({ theme }) => css`
    background-color: ${theme.color.yellow};
    box-shadow: ${theme.shadow.box};
    padding: 8px 0;
  `}
`;

export const NavbarContent = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    display: grid;
    grid-template-areas: "logo search";
    grid-template-columns: 100px 12fr;
  `}
`;

export const LogoWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    align-content: center;
    grid-area: logo;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 4px 0;
  `}
`;

export const FormWrapper = styled(({ ...rest }) => <div {...rest} />)`
  ${({}) => css`
    grid-area: search;
    padding: 6px 0;
  `}
`;

Navbar.displayName = "Navbar";
NavbarContent.displayName = "NavbarContent";
LogoWrapper.displayName = "LogoWrapper";
FormWrapper.displayName = "FormWrapper";
